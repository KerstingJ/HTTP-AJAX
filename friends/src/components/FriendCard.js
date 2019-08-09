import React from 'react'
import styled from 'styled-components'

export default function (props){
    const {friend} = props

    const pushToUpdate = (event) => {
        event.preventDefault();

        if (props.history) {
            props.history.push(`/update/${friend.id}`)
        }
    }

    return (
        <FriendCard
            onClick={pushToUpdate}
        >
            <h2>{friend.name}</h2>
            <p><strong>Age:</strong> {friend.age}</p>
            <p><strong>Email:</strong><br />{friend.email}</p>

            <button
                onClick={props.deleteFriend}
            
            >Delete</button>
        </FriendCard>
    )
}

const FriendCard = styled.div`
    margin: 1rem;
    padding: 1rem;

    width: 260px;
    height: 360px;

    border-radius: 4px;
    border: 1px solid rgb(150,150,150);
    box-shadow: 5px 5px 1px rgb(150,150,150);

    transition: .3s;

    :hover {
        box-shadow: 2px 2px 1px rgb(150,150,150);
        background: rgba(155, 155, 155, 0.2);
    }

    h2 {
        border-bottom: 1px solid rgba(0,0,0,0.4);
        padding-bottom: 1rem;
    }

    button {

        transition: .3s;

        font-size: 1.4rem;

        position: relative;
        width: 100%;
        padding: 1rem;

        bottom: -110px;

        background: rgba(219,112,147, 0.5);
        color: white;

        border-radius: 4px;
        border: 1px solid lightpink;

        box-shadow: 1px 1px 1px rgb(150,150,150);

        :focus {
            outline: none;
        }

        :hover{
            background: white;
            color: lightpink;

            box-shadow: 3px 3px 1px rgb(170,170,170);
        }
    }
`