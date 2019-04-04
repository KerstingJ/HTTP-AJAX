import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Route, Redirect } from 'react-router-dom';
import './App.css';

import FriendsForm from './components/FriendsForm.js'
import FriendsList from './components/FriendsList.js'

import UpdateFriend from './views/UpdateFriend.js'

const baseURL = "http://localhost:5000/"

function App(props) {

  const [friends, setFriends] = useState([]);
  const [mounted, setMounted] = useState(false);
 
  useEffect(() => {
    if (!mounted) {
      console.log("Component did mount... kinda")
      axios.get("http://localhost:5000/friends/")
        .then(res => setFriends(res.data))
        .catch(() => console.log("well shit"))
      setMounted(true);
    }
  })

  const deleteFriend = (event, id) => {
    event.preventDefault();
    event.stopPropagation();

    axios.delete(`${baseURL}friends/${id}`)
      .then(res => setFriends(res.data))
      .catch(err => console.log("oh dang"))

  }

  return (
    <>

      <Route 
        exact path="/"
        render={() => (
          <AppContainer>
            <FriendsForm setAppState={setFriends}/>
            <FriendsList 
              friends={friends}
              deleteFriend={deleteFriend}
            />
          </AppContainer>
        )}
      />

      <Route 
        path="/update/:id"
        render={(props) => (
          friends.length <= 0 ? (
            <Redirect to="/" />
          ) : (
          <UpdateFriend 
            {...props}
            friends={friends}
            setAppState={setFriends}
          /> 
          )
        )}
      />

    </>
  )
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
