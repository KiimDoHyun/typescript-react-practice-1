import React, { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ListComponent from "../Component/ListComponent";
import useCounter from "../Hook/useCounter";
import useList from "../Hook/useList";

const Page2 = () => {
    // 변수, 초기화 이벤트만 사용한다
    const { count, initCounter } = useCounter();
    const { list } = useList();
    const navigate = useNavigate();

    // 전달 받을 인자는 title 이고 string 이다.
    // 리턴할 값이 없기 때문에 리턴 타입은 void 다.
    const onClickList = useCallback((title: String) => {
        navigate("/page2detail", {
            state: {
                title: title,
            },
        });
    }, []);

    useEffect(() => {}, []);

    return (
        <>
            Page2
            <h3>{count}</h3>
            <button onClick={initCounter}>초기화</button>
            {list.map(
                (
                    item: { id: Number; title: String; contents: String },
                    idx: Number
                ) => (
                    <ListComponent
                        key={String(item.id)}
                        idx={idx}
                        title={item.title}
                        contents={item.contents}
                        onClickList={onClickList}
                    />
                )
            )}
        </>
    );
};

export default Page2;
