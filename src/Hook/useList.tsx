import { useSelector } from "react-redux";

const useList = () => {
    const list = useSelector((state: any) => state.ListReducer.list);

    return {
        list,
    };
};

export default useList;
