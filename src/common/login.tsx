import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from '@emotion/styled'
import { Auth } from 'aws-amplify'
import { Props } from '../Routes'

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

export const Login = (appProps: Props) => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const history = useHistory()

	async function handleSubmit (event: React.MouseEvent) {
		event.preventDefault()

		try {
			await Auth.signIn(username, password)
			appProps.appProps.userHasAuthenticated(true); //authenticate using props passed from Routes
			history.push(`/dashboard/${username}`)
		} catch (e) {
			alert(e.message)
		}

		setUsername('')
		setPassword('')
	}

	return (
		<LoginScreen>
			<LoginContainer>
				<GenericInput
					autoFocus
					name="username"
					placeholder="Username"
					value={username}
					onChange={(
						keyBoardEvent: React.ChangeEvent<HTMLInputElement>
					) => {
						if (keyBoardEvent) {
							setUsername(keyBoardEvent.target.value)
						}
					}}
				></GenericInput>
				<GenericInput
					name="password"
					type="password"
					placeholder="Password"
					value={password}
					onChange={(
						keyBoardEvent: React.ChangeEvent<HTMLInputElement>
					) => {
						if (keyBoardEvent) {
							setPassword(keyBoardEvent.target.value)
						}
					}}
				></GenericInput>
				<GoButton onClick={handleSubmit}>Login</GoButton>
			</LoginContainer>
		</LoginScreen>
	)
}
