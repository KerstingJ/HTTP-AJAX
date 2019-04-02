import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import './App.css';

import FriendsForm from './components/FriendsForm.js'
import FriendsList from './components/FriendsList.js'

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
      .catch(err => console.log("well shit"))
  }

  render() {
    return (
      <AppContainer>
        <FriendsList {...this.state}/>
        <FriendsForm />
      </AppContainer>
    );
  }
}

const AppContainer = styled.div`
  max-width: 1100px;
  width: 90%;

  display: flex;
`

export default App;
