import React from "react";
import styled from "styled-components";

interface GetCommitButtonProps {
    onClick: () => void;
}

const GetCommitButton = ({ onClick }: GetCommitButtonProps) => {
    return (
        <GetCommitButtonBlock>
            <button onClick={onClick}>조회하기</button>
        </GetCommitButtonBlock>
    );
};

const GetCommitButtonBlock = styled.div``;
export default React.memo(GetCommitButton);
