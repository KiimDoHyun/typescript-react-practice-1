// practice2 참고 영상을 보고 만든 예제임
// 기존 redux와 다를 수 있음.

// 강의 영상에선 Reducer / action, action 생성자를 별도의 폴더로 관리함.
export interface NotesState {
    notes: string[];
}

const initialState1 = {
    notes: ["hello"],
};

type Action = { type: "ADD_NOTE"; payload: string };

export const addNote = (note: string): Action => ({
    type: "ADD_NOTE",
    payload: note,
});

export const noteReducer = (
    state: NotesState = initialState1,
    action: Action
) => {
    switch (action.type) {
        case "ADD_NOTE": {
            return { ...state, notes: [...state.notes, action.payload] };
        }
        default: {
            return state;
        }
    }
};
