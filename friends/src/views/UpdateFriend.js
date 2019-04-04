import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

import FriendsForm from '../components/FriendsForm.js'
const FriendsFormWithRouter = withRouter(FriendsForm);

export default function(props){

    const goHome = () => {

    }

    let friend = props.friends.find(friend => {
        return friend.id === props.match.params.id - 0
    })

    return (
        <FriendView>
            <FriendsFormWithRouter
                update
                friend={friend}
                setAppState={props.setAppState}
            />
        </FriendView>
    )
}

const FriendView = styled.div`
    display: flex;
    justify-content: center;

`