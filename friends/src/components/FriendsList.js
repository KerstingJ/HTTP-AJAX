import React from 'react'
import styled from 'styled-components';

import FriendCard from './FriendCard';

export default function (props){

    if (!props.friends) return <h3>Loading Friends...</h3>

    console.log(props)

    return (
        <FriendsList>
            {props.friends.map(friend => <FriendCard key={friend.id} friend={friend}/>)}
        </FriendsList>
    )
}

const FriendsList = styled.div`
    
`