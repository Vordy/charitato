import { HashRouter as Router } from 'react-router-dom'
import { Routes } from './Routes'
import React, { useState } from "react";

const App: React.FC = () => {
	const [isAuthenticated, userHasAuthenticated] = useState(false);
	
	return (
		<Router>
			<Routes appProps={{ isAuthenticated, userHasAuthenticated }} />
		</Router>
	)
}

export default App
