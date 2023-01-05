import React, { useCallback, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Input from "../Component/Input";

const Page2Detail = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const {
        state: { title },
    } = location;

    // 타입을 명시적으로 지정
    const [myState, setMyState] = useState<Boolean>(false);
    const [state1, st1] = useState(2); // 자동으로 number 지정
    const [state2, st2] = useState(""); // 자동으로 string 지정

    /*
    input 의 onChange 로 전달받는 'e' 의 타입은 React.ChangeEvent<HTMLInputElement> 이렇게 생김
    
    리턴이 없으면 void 타입임. -> 생략 가능함.
    */
    const onChangeState1 = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log("e: ", e);

        // 지정된 타입으로만 변경 가능함
        st1(Number(e.target.value));
    };

    const onClickBack = useCallback(() => {
        navigate("/page2");
    }, [navigate]);

    return (
        <>
            Page2Detail
            <button onClick={onClickBack}>BACK</button>
            <input value={state1} onChange={onChangeState1} />
            {/* state, setState 전달. */}
            <Input state={state2} setState={st2} />
        </>
    );
};

export default Page2Detail;
