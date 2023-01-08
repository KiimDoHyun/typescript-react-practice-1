import React, { useCallback, useEffect } from "react";
import styled from "styled-components";
import { getGitCommitApi } from "../api/git";
import GetCommitButton from "../Component/Practice3/GetCommitButton";
import Practice3ListArea from "../Component/Practice3/Practice3ListArea";
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
    const [{ data, error, isLoading }, getCommit] = useAxios(getGitCommitApi);
    // const [gitCommitResult, getCommit, bb] = useAxios(getGitCommitApi);

    const onClickGetCommitButton = useCallback(() => {
        getCommit({
            user: USER,
            repo: REPO,
        });
    }, []);

    /*
    조회 로직과 state가 이 위치에 모두 존재한다

    버튼 영역은 state가 변경됨에 따라 리렌더링이 발생할 필요가 없다
     단순 조회 트리거의 역할만 하기 때문

    실제 데이터를 다루는건 리스트 출력 영역에 해당한다.
    */
    return (
        <Practice3Box>
            {/* 조회 버튼 영역 */}
            <GetCommitButton onClick={onClickGetCommitButton} />

            {/* 리스트 영역 */}
            <Practice3ListArea
                data={data}
                error={error}
                isLoading={isLoading}
            />
        </Practice3Box>
    );
};

const Practice3Box = styled.div``;

export default Practice3;
