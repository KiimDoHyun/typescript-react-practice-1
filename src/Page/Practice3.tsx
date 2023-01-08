import React, { useCallback, useEffect } from "react";
import styled from "styled-components";
import { getGitCommitApi } from "../api/git";
import useAxios from "../Hook/useAxios";

const USER = "KiimDoHyun";
const REPO = "KiimDoHyun-portfolio_window";

const Practice3 = () => {
    /*
    깃 커밋 리스트 조회
    조회는 버튼으로, 지연시간 줘서 로딩활성화
    출력

    출력
    */
    const [{ data, error, isLoading }, getCommit, bb] =
        useAxios(getGitCommitApi);
    // const [gitCommitResult, getCommit, bb] = useAxios(getGitCommitApi);

    const onClickGetCommitButton = useCallback(() => {
        getCommit({
            user: USER,
            repo: REPO,
        });
    }, []);

    // useEffect(() => {
    //     const myFunc = (body: object) => {
    //         console.log("body: ", body);
    //     };

    //     myFunc({ value: 1 });
    //     myFunc({ value123: 1 });
    // }, []);

    // useEffect(() => {
    //     console.log("gitCommitResult :", gitCommitResult);
    // }, [gitCommitResult]);

    return (
        <Practice3Box>
            <div>
                <button onClick={onClickGetCommitButton}>조회하기</button>
            </div>
            <div className="ListArea">
                {isLoading && <div>Loading...</div>}
                {error && <div>데이터 조회 에러 발생</div>}
                {data && <div className="ListArea">리스트 조회</div>}
            </div>
        </Practice3Box>
    );
};

const Practice3Box = styled.div``;

export default Practice3;
