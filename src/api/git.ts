import client from "./client";

//! return 타입에 any 가 있음
export const getGitCommitApi = (user?: string, repo?: string) =>
    client.get(`https://api.github.com/repos/${user}/${repo}/commits`);
