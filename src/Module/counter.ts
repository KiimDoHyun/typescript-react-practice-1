// 액션타입 선언
/*
as const : 타입 단언
타입이 string이 아니라 아래 예제 에선 문자열 그자체가 타입이 됨.

CHANGE_COUNT 의 타입은 "counter/CHANGE_COUNT" 다.

액션 함수에서 type 을 사용할때  string 이 아니라 액션의 문자열
그자체가 타입 으로 지정됨.
*/
const CHANGE_COUNT = "counter/CHANGE_COUNT" as const;
const INIT_COUNT = "counter/INIT_COUNT" as const;
const SET_COUNT = "counter/SET_COUNT" as const;

// 인자 값의 타입 지정.
// 액션생성함수 선언
export const changeCount = (changeType: String) => ({
    type: CHANGE_COUNT,
    payload: changeType,
});
export const initCount = () => ({ type: INIT_COUNT });
export const setCount = (newNumber: Number) => ({
    type: SET_COUNT,
    payload: newNumber,
});

// 액션객체 타입
// 모든 액션 객체들에 대한 타입을 준비해줍니다.
// ReturnType<typeof _____> 는 특정 함수의 반환값을 추론해줍니다
// 상단부에서 액션타입을 선언 할 떄 as const 를 하지 않으면 이 부분이 제대로 작동하지 않습니다.
type CounterAction =
    | ReturnType<typeof changeCount>
    | ReturnType<typeof initCount>
    | ReturnType<typeof setCount>;

// 배열 속 객체의 타입 지정
interface SubObject {
    value1: string;
    value2: number;
}

// 기본값 타입
interface Count {
    count: Number; // 일반 변수
    // normalList: number[]; // 타입을 지정한 배열
    normalList: Array<string>; // 타입을 지정한 배열
    generalList: any[]; // 뭐든지 가능 -> 권장하지 않음.
    // generalList: <T>Array
    objectList: Array<SubObject>; // 객체를 원소로 가지는 배열. 객체의 타입도 지정할 수 있음.

    // 튜플 크기와 타입이 고정된 배열임.
    tuple1: [number, string, boolean]; // 1차원
    tuple2: Array<[number, string, boolean]>; // 2차원
    tuple3?: [999, string]; // 값 자체 고정 + 선택적
}

// 기본 값
export const initialState: Count = {
    count: 0,
    normalList: [],
    generalList: [1, true, { value3: true }],
    objectList: [
        {
            value1: "1",
            value2: 2,
        },
    ],
    tuple1: [1, "hello", true],
    tuple2: [
        [1, "hello", true],
        [1, "hello", true],
    ],
    tuple3: [999, "hello"],
    // tuple3: [111, "hello"], // 값 자체가 고정되어있어서 111은 불가능함.
};

// action에 type 과 payload 가 들어있음
const CountReducer = (state: Count = initialState, action: CounterAction) => {
    const { type } = action;
    switch (type) {
        case CHANGE_COUNT:
            const { payload } = action;
            return {
                count:
                    payload === "PLUS"
                        ? (state.count as number) + 1
                        : (state.count as number) - 1,
            };

        case INIT_COUNT:
            return initialState;

        case SET_COUNT:
            return {
                count: action.payload,
            };
        default:
            return state;
    }
};

export default CountReducer;
