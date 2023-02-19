import { AxiosResponse } from 'axios';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import client from '../api/client';
import { getGitCommitApi } from '../api/git';
import List from '../Component/Practice4/List';

const testApi = (repo:string = ''):Promise<AxiosResponse<any, any>> => {
    return client.get(`/search/repositories?q=${repo}&page=${1}`)

    /*
    return client.get(`/search/repositories`, {
        params: {
            q: repo,
            page: 1
        }
    })
    */
}

/*
useQuery : 서버 데이터 가져오기 (read)
useMutation: 서버데이터 변경 (create, update, delete)

const { isLoading, error, data } = useQuery('user', fetcher, options);
const { data, isLoading, mutate, mutateAsync } = useMutation(mutationFn, options);

*/

/*
* !!: 값을 불린형으로 변환
*/

const Practice4 = () => {
    const [inputRepo, setInputRepo] = useState('');
    // ReactQuery
    // param이 있는 경우 key를 배열로, 2번쨰 인자는 params 로 사용한다.
    // 검색에 사용할 값유무에 따라 enabled 수정

    /*
    search 조회 방법1
    inputRepo 값이 없으면 false 로 렌더링 되어 query가 실행이 안된다.
    inputRepo 값이 있으면 true 로 렌더링 되어 query가 실행 된다.
    */
    const {isLoading, isError, data, error, status} = useQuery(["getGitRepo", inputRepo], () => testApi(inputRepo), {
        onSuccess: () => console.log('성공입니다.'),
        enabled: !!inputRepo,
        keepPreviousData: true // 데이터 재 조회시 이전 데이터가 사라지고 새로 데이터 조회하는 과정에서 데이터가 안보이는 걸 방지함. (이전데이터를 유지하고 새로 데이터를 가져오면 새 데이터로 교체됨)
    })

    /*
    search 조회 방법2
    enabled: false 로 자동 실행을 막는다.
    refetch 함수로 특정 시점에 api를 호출한다.
    명령형으로 사용하면 안된다?

    "쿼리는 선언형이다."

    */
    // const {isLoading, isError, data, error, status, refetch} = useQuery(["getGitRepo", inputRepo], () => testApi(inputRepo), {
    //     onSuccess: (e) => console.log('성공입니다.', e),
    //     onError: () => console.log('에러'),
    //     enabled: false
    // })

    // if(isLoading) {
    //     return (
    //         <div>
    //             <h1>Loading...</h1>
    //         </div>
    //     )
    // }

    // if(isError){
    //     return (
    //         <div>
    //             <h1>에러 발생</h1>
    //         </div>
    //     )
    // }

    const onSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget
        const formElements = form.elements as typeof form.elements & {
            repoInput: {value: string}
        }

        if(!formElements.repoInput.value) return;
        setInputRepo(formElements.repoInput.value);
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label>검색값</label>
                <input id='repoInput'/>
                <button>검색</button>
            </form>
            {isLoading && <div>로딩중</div>}
            {isError && <div>에러발생</div>}
            <List listData={data}/>

        </div>
    );
}

export default Practice4;