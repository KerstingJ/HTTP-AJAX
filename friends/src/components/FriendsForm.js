import React, { useState, useEffect }from 'react'

import styled from 'styled-components';
import Axios from 'axios';


const baseURL = "http://localhost:5000/"

export default function(props) {
    const [friend, setFriend] = useState(
        props.friend ? props.friend : {name: "", age: "", email: ""}
    )
    const [error, setError] = useState("")

    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        if (submitted) {
            setSubmitted(!submitted)
            props.history.push("/")
        }
    })

    const validateInput = valFriend => {
        const { name, age, email} = valFriend

        if (!name.trim()){
            setError("name is required")
            return null
        }

        if(name.match(/[\W_0-9]/)){
            setError("That's not a real name")
            return null
        }

        if (age > 120 || age < 5) {
            setError("That cant be a real age?!")
            return null
        }

        if(!email.match(/^[\w_.]+[@][a-zA-Z]+[.]+[a-zA-Z]+$/)){
            setError("Needs a valid Email")
            return null
        }

        return {...valFriend};
    }
    
    const inputHandler = event => {
        event.preventDefault();

        let friendCopy = {...friend}
        friendCopy[event.target.name] = event.target.value
        setFriend(friendCopy)
    }

    const addFriend = event => {
        event.preventDefault();

        if (!validateInput(friend)){
            return;
        }

        Axios.post(baseURL + "friends" , friend)
            .then((res) => {
                props.setAppState(res.data)
                setFriend({name: "", age: "", email: ""});
                setError("");
            })
            .catch((err) => console.log("Oh Shit ", err))
    }

    const updateFriend = event => {
        event.preventDefault();

        if (!validateInput(friend)){
            return;
        }

        Axios.put(`${baseURL}friends/${friend.id}`, friend)
            .then((res) => {
                props.setAppState(res.data)
                setFriend({name: "", age: "", email: ""})
                setSubmitted(!submitted)
            })
            .catch((err) => console.log("Oh Shit ", err))
    }

    return (
        <FriendForm>
            <Error>{error}</Error>
            <input 
                type="text"
                name="name"
                placeholder="name"
                value={friend.name}
                onChange={inputHandler}
            ></input>
            <input 
                type="number"
                name="age"
                placeholder="age"
                value={friend.age}
                onChange={inputHandler}
            ></input>
            <input 
                type="email"
                name="email"
                placeholder="email"
                value={friend.email}
                onChange={inputHandler}
            ></input>
            <button 
                type="submit"
                onClick={
                    props.update
                    ? updateFriend
                    : addFriend
                }
            >{props.update ? "Update" : "Add"} Friend</button>
        </FriendForm>
    )
}

const Error = styled.div`
    text-align: center;
    color: red;
`

const FriendForm = styled.form`

    display: inline-flex;
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