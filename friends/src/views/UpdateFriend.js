import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

import FriendsForm from '../components/FriendsForm.js'
const FriendsFormWithRouter = withRouter(FriendsForm);

export default function(props){

    const goHome = event => {
        event.preventDefault();
        props.history.push("/")
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
            <button className="backButton" onClick={goHome}>Back</button>
        </FriendView>
    )
}

const FriendView = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    .backButton {
        background: none;
        border: none;
        transition: .2s;

        :hover {
            text-decoration: underline;
        }
    }

`