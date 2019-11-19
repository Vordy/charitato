import { HashRouter as Router } from 'react-router-dom'
import { Routes } from './Routes'
import { Navbar } from "react-bootstrap";
import React from 'react'

const App: React.FC = () => {
	return (
		<Router>
			<Routes />
		</Router>
	)
}

export default App
