import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Route, Redirect } from 'react-router-dom';
import './App.css';

import FriendsForm from './components/FriendsForm.js'
import FriendsList from './components/FriendsList.js'

import UpdateFriend from './views/UpdateFriend.js'

const baseURL = "http://localhost:5000/"

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      friends: [],
    }
  }

  componentDidMount(){
    console.log("Component did mount")
    axios.get("http://localhost:5000/friends/")
      .then(res => this.setState({friends: res.data}))
      .catch(() => console.log("well shit"))
  }

  deleteFriend = (event, id) => {
    event.preventDefault();
    event.stopPropagation();

    // console.log(`${baseURL}friends/${id}`)
    axios.delete(`${baseURL}friends/${id}`)
      .then(res => this.setState({friends: res.data}))
      .catch(err => console.log("oh dang"))

  }

  updateFriend = (event, id) => {
    event.preventDefault();

    // console.log(`${baseURL}friends/${id}`)
    axios.delete(`${baseURL}friends/${id}`)
      .then(res => this.setState({friends: res.data}))
      .catch(err => console.log("oh dang"))
  }

  render() {
    return (<>

      <Route 
        exact path="/"
        render={() => (
          <AppContainer>
            <FriendsForm setAppState={this.setState.bind(this)}/>
            <FriendsList 
              friends={this.state.friends}
              deleteFriend={this.deleteFriend}
            />
          </AppContainer>
        )}
      />

      <Route 
        path="/update/:id"
        render={(props) => (
          this.state.friends.length <= 0 ? (
            <Redirect to="/" />
          ) : (
          <UpdateFriend 
            {...props}
            friends={this.state.friends}
            setAppState={this.setState.bind(this)}
          /> 
          )
        )}
      />
    </>)
  }
}

const AppContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;

  display: flex;
  flex-direction: row;
  justify-content: space-around;

  flex-wrap: wrap;
`

export default App;
