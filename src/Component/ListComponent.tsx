import React, { EventHandler } from "react";
import styled from "styled-components";

// 객체의 타입 지정은 인터페이스로도 가능함.
interface ListComponentProp {
    idx: Number;
    title: String;
    contents: String;
    onClickList: (title: String) => void;
}

// type ListComponentProp = {
//     idx: Number;
//     title: String;
//     contents: String;
//     onClickList: (title: String) => void;
// };

/*
리액트 컴포넌트는 JSX 를 리턴한다.
리턴타입이 JSX.Element 다. 

명시적으로 지정하지 않아도 JSX를 리턴하기 때문에
타입스크립트가 타입을 지정한다.
*/
const ListComponent = ({
    idx,
    title,
    contents,
    onClickList,
}: ListComponentProp): JSX.Element => {
    return (
        <ListComponentBlock onClick={() => onClickList(title)}>
            <div>{(idx as number) + 1}</div>
            <div>{title}</div>
            <div>{contents}</div>
        </ListComponentBlock>
    );
};

const ListComponentBlock = styled.div`
    width: 300px;
    cursor: pointer;
    &:hover {
        background-color: #dfdfdf;
    }
`;
export default React.memo(ListComponent);
