// DEPRECATED
// DEPRECATED
// DEPRECATED
// DEPRECATED
// DEPRECATED

import { useHistory } from 'react-router-dom'
import React, { useState } from 'react'
import styled from '@emotion/styled'
// import { Auth } from 'aws-amplify'

const LoginScreen = styled.div`
    width: 100%;
    height: 100%;
    background-color: gray;
    opacity: 0.5;
    display: flex;
    flex-direction: center;
    justify-content: center;
    align-items: center;
`

const LoginContainer = styled.div`
    width: 20%;
    height: 30%;
    background-color: white;
    font-family: 'Helvetica Nueue', roboto, Arial, Helvetica, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const GenericInput = styled.input`
    width: 90%;
    height: 20%;
    background-color: white;
`

const GoButton = styled.div`
    background-color: blue;
    border-radius: 25px;
    width: 90%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    user-select: none;

    &:active {
        background-color: red;
    }
`

export const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()

    const handleSubmit = async (event: React.MouseEvent) => {
        event.preventDefault()

        alert('THIS LOGIN PAGE NO LONGER DOES STUFF')

        setUsername('')
        setPassword('')

        history.push(`/dashboard/${username}`)
    }

    const InputChangeEvent = (
        keyBoardEvent: React.ChangeEvent<HTMLInputElement>
    ) => {
        if (keyBoardEvent) {
            setUsername(keyBoardEvent.target.value)
        }
    }

    return (
        <LoginScreen>
            <LoginContainer>
                <h3>You should not be here</h3>
                <GenericInput
                    name="username"
                    placeholder="Username"
                    value={username}
                    onChange={InputChangeEvent}
                />
                <GenericInput
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={InputChangeEvent}
                />
                <GoButton onClick={handleSubmit}>Login</GoButton>
            </LoginContainer>
        </LoginScreen>
    )
}
