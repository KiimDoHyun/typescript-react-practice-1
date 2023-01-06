import { render } from "@testing-library/react";
import React, { ReactElement, ReactNode, useState } from "react";
import styled from "styled-components";
import { isTemplateSpan } from "typescript";

// Old way?
const HeadingFC: React.FC<{ title: string }> = ({ title }) => <h1>{title}</h1>;

// Conventional props
const Heading = ({ title }: { title: string }) => {
    return <h1>{title}</h1>;
};

/*
ReactElement를 리턴한다
리턴 타입을 명시 하지 않아도 JSX 코드를 리턴하기 때문에 타입스크립트가
자동으로 체크한다.
*/
const HeadingWithContent = ({
    children,
}: {
    children: ReactNode;
}): ReactElement => {
    return <h1>{children}</h1>;
};

const defaultContainerProps = {
    heading: <strong>My Heading</strong>,
};

type ContainerProps = {
    children: ReactNode;
} & typeof defaultContainerProps;

const Container = ({ heading, children }: ContainerProps): ReactElement => {
    return (
        <div>
            <h1>{heading}</h1>
            {children}
        </div>
    );
};

Container.defaultProps = defaultContainerProps;

// Functional props
const TextWidthNumber = ({
    header,
    children,
}: {
    header?: (num: number) => ReactNode;
    children: (num: number) => ReactNode;
}) => {
    const [state, setState] = useState<number>(1);

    return (
        <div>
            {/* 
            header 는 옵셔널 한 props임 
            따라서 header가 존재하지 않은 경우 함수처럼 사용이 불가능 하기 때문에
            ?. 연산자를 이용한다.

            header가 유효한 경우 실행하도 그렇지 안으면 undefined를 리턴한다.

            객체에서도 사용 가능함.
            */}
            <h2>{header?.(state)}</h2>

            {/* 기존 방식 */}
            <h2>{header && header(state)}</h2>
            <div>{children(state)}</div>
            <div>
                <button onClick={() => setState(state + 1)}>Add</button>
            </div>
        </div>
    );
};

// List
// 함수 표현식에서 제네릭 사용
/*
items는 배열을 받도록 하지만 어떤 타입을 가진 배열이 들어올지 모른다
제네릭을 이용하면 들어오는 타입에 맞게 설정이 가능하다
*/
const List = <ListItem extends {}>({
    items,
    render,
}: {
    items: ListItem[];
    render: (item: ListItem) => ReactNode;
}) => {
    return (
        <ul>
            {items.map((item, index) => (
                <li key={index}>{render(item)}</li>
            ))}
        </ul>
    );
};

const Practice1 = () => {
    return (
        <Practice1Block>
            <Heading title={"Hello there"} />
            <HeadingWithContent>
                <strong>Hi</strong>
            </HeadingWithContent>
            <Container>Foo</Container>
            <Container heading={<div>Cool,.</div>}>Foo</Container>

            <TextWidthNumber
                header={(num: number) => <span>Header {num}</span>}
            >
                {(num: number) => <div>Today's number is {num}</div>}
            </TextWidthNumber>

            <List
                items={["Jack", "Sadie", "oso"]}
                render={(item: string) => <div>{item}</div>}
            ></List>
        </Practice1Block>
    );
};

const Practice1Block = styled.div`
    margin: auto;
    max-width: 800px;
    fons-size: xx-large;
`;

export default Practice1;
