import React from 'react'
import styled from 'styled-components'

export default function (props){
    const {friend} = props
    return (
        <FriendCard>
            <h2>{friend.name}</h2>
            <p><strong>Age:</strong> {friend.age}</p>
            <p><strong>Email:</strong> {friend.email}</p>
        </FriendCard>
    )
}

const FriendCard = styled.div`
    margin: 2rem;
    padding: 1rem;

    border-radius: 4px;
    border: 1px solid rgb(150,150,150);
    box-shadow: 5px 5px 1px rgb(150,150,150);

    transition: .3s;

    :hover {
        box-shadow: 2px 2px 1px rgb(150,150,150);
        background: rgba(155, 155, 155, 0.2);
    }

    h2 {
        border-bottom: 1px solid rgba(0,0,0,0.4);
        padding-bottom: 1rem;
    }
`