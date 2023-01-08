import React from "react";
import styled from "styled-components";

// 백엔드로부터 어떤 형식을 받을지 모르는데 어떻게?
// 제네릭 의 적절한 사용예시 필요
interface Data {
    author: any;
    comments_url: string;
    commit: {};
    committer: {};
    html_url: string;
    node_id: string;
    parents: {};
    sha: string;
    url: string;
}

interface Practice3ListAreaProps {
    data: any | null;
    // data: Array<Data> | null;
    error: object | null;
    isLoading: boolean;
}

const Practice3ListArea = ({
    data,
    error,
    isLoading,
}: Practice3ListAreaProps) => {
    console.log("data: ", data);
    return (
        <Practice3ListAreaBlock>
            {" "}
            {isLoading && <div>Loading...</div>}
            {error && <div>데이터 조회 에러 발생</div>}
            <div className="ListArea">
                {data?.map((dataItem: any, idx: number) => (
                    <div key={idx}>{dataItem.author.login}</div>
                ))}
            </div>
        </Practice3ListAreaBlock>
    );
};

const Practice3ListAreaBlock = styled.div``;
export default React.memo(Practice3ListArea);
