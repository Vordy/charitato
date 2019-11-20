import { HashRouter as Router } from 'react-router-dom'
import { Routes } from './Routes'
import React, { useState, useEffect } from 'react'
import { Auth } from 'aws-amplify'

const App: React.FC = () => {
	const [isAuthenticated, userHasAuthenticated] = useState(false)
	const [isAuthenticating, setIsAuthenticating] = useState(true)

	useEffect(() => {
		onLoad()
	}, [])

	async function onLoad() {
		try {
			await Auth.currentSession()
			userHasAuthenticated(true)
		} catch (e) {
			if (e !== 'No current user') {
				alert(e)
			}
		}

		setIsAuthenticating(false)
	}

	return (
		<Router>
			<Routes appProps={{ isAuthenticated, userHasAuthenticated }} />
		</Router>
	)
}

export default App
