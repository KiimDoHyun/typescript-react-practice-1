import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import NewNoteInput from "../Component/NewNoteInput";
import { RootState } from "../Module";
import { addNote } from "../Module/note";

const Practice2 = () => {
    // 방법은 두가지
    // <state의 타입 지정, useSelctor의 리턴 타입 지정>
    const notes = useSelector<RootState, RootState["noteReducer"]["notes"]>(
        (state) => state.noteReducer.notes
    );
    // RootState에 모든 reducer 타입이 존재하기때문에 인자에 해당하는 state만 타입을 지정함
    // const notes = useSelector((state: RootState) => state.noteReducer.notes);

    const dispatch = useDispatch();

    const onAddNote = (note: string) => {
        // 액션 생성 함수가 없다면 액션 타입과 전달할 값을 객체로 dispatch 에 전달해야한다.
        // dispatch({ type: "ADD_NOTE", payload: note });

        // 액션 생성자 함수를 통해 간편화
        dispatch(addNote(note));
    };
    return (
        <>
            <NewNoteInput addNote={onAddNote} />
            <ul>
                {notes?.map((note: string) => {
                    return <li key={note}>{note}</li>;
                })}
            </ul>
        </>
    );
};

export default Practice2;
