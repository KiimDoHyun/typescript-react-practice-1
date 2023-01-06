import React, { ChangeEvent, useState } from "react";

interface NewNoteInputProps {
    addNote(note: string): void;
}

// 두가지 방식으로 가능함
// ? 1. const NewNoteInput: React.FC<NewNoteInputProps> = ({ addNote }) => {
// ? 2. const NewNoteInput = ({ addNote }: NewNoteInputProps) => {
const NewNoteInput = ({ addNote }: NewNoteInputProps) => {
    const [note, setNote] = useState("");

    const updateNote = (e: ChangeEvent<HTMLInputElement>) => {
        const {
            target: { value },
        } = e;
        setNote(value);
    };

    const onAddNoteClick = () => {
        addNote(note);
        setNote("");
    };
    return (
        <>
            <div>
                <input
                    onChange={updateNote}
                    value={note}
                    type={"text"}
                    name="note"
                    placeholder="Note"
                />
                <button onClick={onAddNoteClick}>Add note</button>
            </div>
        </>
    );
};

export default NewNoteInput;
