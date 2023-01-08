import { AxiosResponse } from "axios";
import client from "./client";

// 리턴값 지정?
export interface GitCommitResponse {
    sha: string;
}

//! return 타입에 any 가 있음
export const getGitCommitApi = ({
    user,
    repo,
}: {
    user?: string;
    repo?: string;
}): Promise<AxiosResponse<GitCommitResponse>> =>
    client.get(`https://api.github.com/repos/${user}/${repo}/commits`);
