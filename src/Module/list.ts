const SET_LIST = "list/SET_LIST" as const;

export const setList = (newList: []) => ({
    type: SET_LIST,
    payload: newList,
});

// 액션객체 타입
type ListAction = ReturnType<typeof setList>;

// 기본 값
export const initialState = {
    list: [
        {
            id: 1111,
            title: "리스트 1번",
            contents: "리스트 1번의 내용 입니다.",
            longContents:
                "리스트 1번의 내용 입니다.리스트 1번의 내용 입니다.리스트 1번의 내용 입니다.리스트 1번의 내용 입니다.리스트 1번의 내용 입니다.리스트 1번의 내용 입니다.리스트 1번의 내용 입니다.리스트 1번의 내용 입니다.리스트 1번의 내용 입니다.리스트 1번의 내용 입니다.리스트 1번의 내용 입니다.리스트 1번의 내용 입니다.",
        },
        {
            id: 2222,
            title: "리스트 2번",
            contents: "리스트 2번의 내용 입니다.",
            longContents:
                "리스트 2번의 내용 입니다.리스트 2번의 내용 입니다.리스트 2번의 내용 입니다.리스트 2번의 내용 입니다.리스트 2번의 내용 입니다.리스트 2번의 내용 입니다.리스트 2번의 내용 입니다.리스트 2번의 내용 입니다.리스트 2번의 내용 입니다.리스트 2번의 내용 입니다.리스트 2번의 내용 입니다.리스트 2번의 내용 입니다.리스트 2번의 내용 입니다.리스트 2번의 내용 입니다.리스트 2번의 내용 입니다.리스트 2번의 내용 입니다.리스트 2번의 내용 입니다.",
        },
        {
            id: 3333,
            title: "리스트 3번",
            contents: "리스트 3번의 내용 입니다.",
            longContents:
                "리스트 3번의 내용 입니다.리스트 3번의 내용 입니다.리스트 3번의 내용 입니다.리스트 3번의 내용 입니다.리스트 3번의 내용 입니다.리스트 3번의 내용 입니다.리스트 3번의 내용 입니다.리스트 3번의 내용 입니다.리스트 3번의 내용 입니다.리스트 3번의 내용 입니다.리스트 3번의 내용 입니다.리스트 3번의 내용 입니다.",
        },
    ],
};
const ListReducer = (state = initialState, action: ListAction) => {
    const { type } = action;
    switch (type) {
        case SET_LIST:
            return state;

        default:
            return state;
    }
};

export default ListReducer;
