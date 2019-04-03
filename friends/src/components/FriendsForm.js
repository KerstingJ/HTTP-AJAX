import React from 'react'

import styled from 'styled-components';
import Axios from 'axios';

const baseURL = "http://localhost:5000/"

export default class FForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: "",
            age: "",
            email: ""
        }
    }
    
    inputHandler = event => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();

        let friend = this.state;

        Axios.post(baseURL + "friends" , friend)
            .then((res) => {

                this.props.setAppState({friends: res.data})
                this.setState({name: "", age: "", email: ""})
            })
            .catch((err) => console.log("Oh Shit ", err))
    }

    render() {
        return (
            <FriendForm>
                <input 
                    type="text"
                    name="name"
                    placeholder="name"
                    value={this.state.name}
                    onChange={this.inputHandler}
                ></input>
                <input 
                    type="text"
                    name="age"
                    placeholder="age"
                    value={this.state.age}
                    onChange={this.inputHandler}
                ></input>
                <input 
                    type="text"
                    name="email"
                    placeholder="email"
                    value={this.state.email}
                    onChange={this.inputHandler}
                ></input>
                <button 
                    type="submit"
                    onClick={this.handleSubmit}
                >Add Friend</button>
            </FriendForm>
        )
    }
}

const FriendForm = styled.form`

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    margin: 1rem;

    border: 1px solid lightgray;
    border-radius: 5px;
    padding: 43px 32px;

    input {
        margin-bottom: 2rem;
        padding: 1rem;
        border-radius: 4px;
        border: 1px solid lightgray;

        font-size: inherit;

        

        :focus {
            transition: .2s;

            outline: none;
            border-color: lightskyblue;

            &::placeholder {
                color: lightskyblue;
            }
        }

        :active {
            
        }
    }

    button {
        padding: 1rem;
        border-radius: 4px;
        border: 2px solid lightskyblue;

        background: lightskyblue;
        color: white;

        font-size: inherit;

        width: 100%;

        transition: .3s;

        :focus {
            outline: none;
        }

        :hover {
            color: lightskyblue;
            background: white;
        }
    }

`