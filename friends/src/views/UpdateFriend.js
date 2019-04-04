import React from 'react';
import { withRouter } from 'react-router-dom';

import FriendsForm from '../components/FriendsForm.js'

const FriendsFormWithRouter = withRouter(FriendsForm);

export default class UpdateFriend extends React.Component {
    render(){
        let friend = this.props.friends.find(friend => {
            return friend.id === this.props.match.params.id - 0
        })

        return (
            <FriendsFormWithRouter 
                update
                friend={friend}
                setAppState={this.props.setAppState}
            />
        )
    }
}