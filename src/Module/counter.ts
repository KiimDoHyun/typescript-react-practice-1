// 액션타입 선언
/*
as const : 타입 단언

*/
const CHANGE_COUNT = "counter/CHANGE_COUNT" as const;
const INIT_COUNT = "counter/INIT_COUNT" as const;
const SET_COUNT = "counter/SET_COUNT" as const;

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
type CounterAction =
    | ReturnType<typeof changeCount>
    | ReturnType<typeof initCount>
    | ReturnType<typeof setCount>;

// 기본값 타입
export type Count = {
    count: Number;
};

// 기본 값
export const initialState: Count = {
    count: 0,
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
