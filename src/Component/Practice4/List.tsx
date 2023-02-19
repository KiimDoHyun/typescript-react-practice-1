import React from 'react';
import styled from 'styled-components';


const List = ({listData}: any) => {
    return (
        <ListBlock>
            {listData?.data.items.map((item: any) => (
                <li key={item.id}>{item.name}</li>
            ))}
        </ListBlock>
    );
}

const ListBlock = styled.ul``;
export default List;