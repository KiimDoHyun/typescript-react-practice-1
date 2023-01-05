import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";

/*
state는 데이터 타입 그대로
setState는 Dispatch<SetStateAction<string>> 이렇게
*/
interface InputProps {
    state: string;
    setState: Dispatch<SetStateAction<string>>;
}

const Input = ({ state, setState }: InputProps) => {
    return (
        <>
            <InputBlock
                value={state}
                onChange={(e) => setState(e.target.value)}
            />
        </>
    );
};

const InputBlock = styled.input``;
export default Input;
