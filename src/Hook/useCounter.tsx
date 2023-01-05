import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { changeCount, initCount, setCount } from "../Module/counter";

const useCounter = () => {
    // 사용할 변수
    const count = useSelector((state: any) => state.CountReducer.count);
    const dispatch = useDispatch();

    // 각종 이벤트
    const increaseCounter = useCallback(() => {
        dispatch(changeCount("PLUS"));
    }, [dispatch]);

    const decreaseCounter = useCallback(() => {
        dispatch(changeCount("MINUS"));
    }, [dispatch]);

    const initCounter = useCallback(() => {
        dispatch(initCount());
    }, [dispatch]);

    const setCounter = useCallback(
        (newNumber: Number) => {
            dispatch(setCount(newNumber));
        },
        [dispatch]
    );
    return {
        count,
        increaseCounter,
        decreaseCounter,
        initCounter,
        setCounter,
    };
};

export default useCounter;
