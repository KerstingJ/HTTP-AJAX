import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

import FriendsForm from '../components/FriendsForm.js'

export default class UpdateFriend extends React.Component {
    render(){
        let friend = this.props.friends.find(friend => {
            return friend.id === this.props.match.params.id - 0
        })

        return (
            <StyledFriendsFormWithRouter 
                update
                friend={friend}
                setAppState={this.props.setAppState}
            />
        )
    }
}

const StyledFriendsForm = styled(FriendsForm)`
    display: inline-block;

`
const StyledFriendsFormWithRouter = withRouter(StyledFriendsForm);