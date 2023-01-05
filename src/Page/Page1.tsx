import useCounter from "../Hook/useCounter";

const Page1 = () => {
    // 변수와 사용할 모든 이벤트를 받아서 사용한다.
    const { count, increaseCounter, decreaseCounter, initCounter, setCounter } =
        useCounter();

    return (
        <div>
            <h1>Redux 로 구현한 카운터</h1>
            <h3>Count: {`${count}`}</h3>
            <button onClick={increaseCounter}>+</button>
            <button onClick={decreaseCounter}>-</button>
            <button onClick={initCounter}>초기화</button>
            <input
                value={count}
                onChange={({ target: { value } }) => setCounter(Number(value))}
            />
        </div>
    );
};

export default Page1;

/*
state 선언할때 타입정의
props 받을때 타입 정의
함수 타입 정의
*/
