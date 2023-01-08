import { useEffect, useRef, useState } from "react";
import { useCallback } from "react";
import { AxiosResponse } from "axios";
import { GitCommitResponse } from "../api/git";

// body,

const useAxios = (
    initialApi: (body: object) => Promise<AxiosResponse<any>>
): [
    state: {
        apiResponse: object | null;
        data: any[] | null;
        error: object | null;
        isLoading: boolean;
    },
    getData: (body_input: object) => void,
    changeApi: (inputApi: any) => void
] => {
    const [state, setState] = useState({
        apiResponse: null,
        data: null,
        error: null,
        isLoading: false,
    });
    const body = useRef({});
    const requestApi = useRef(initialApi);

    //  사용자가 호출할 함수
    const getData = useCallback((body_input: object) => {
        body.current = body_input;
        setState((prev) => ({
            ...prev,
            isLoading: true,
        }));
    }, []);

    // 데이터를 가져올 함수
    const callApi = useCallback(async () => {
        const requestApi_real: any = requestApi.current;
        if (!requestApi_real) {
            console.warn("호출할 api 가 정의되지 않았습니다.");
            return;
        }

        let data = null;
        let error = null;
        let _apiResponse: any = null;
        try {
            const apiResponse = await requestApi_real(body.current);
            /*
                200번대 응답 (성공)인 경우 data에 값이 할당
                400번대 응답 (실패)인 경우 error에 값이 할당
            */
            data = apiResponse.data;
            _apiResponse = apiResponse;
        } catch (e: any) {
            error = e.response;
            // console.error("[Axios Error]: ", e);
        } finally {
            setState({
                apiResponse: _apiResponse,
                data,
                error,
                isLoading: false,
            });
        }
    }, []);

    // 초기 api 호출 함수를 변경하는 용도
    const changeApi = useCallback(
        (inputApi: any) => (requestApi.current = inputApi),
        []
    );

    useEffect(() => {
        if (state.isLoading) {
            callApi();
        }
    }, [state]);

    return [state, getData, changeApi];
};

export default useAxios;
