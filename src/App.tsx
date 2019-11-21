import { BrowserRouter as Router } from 'react-router-dom'
import { Routes } from './Routes'
import React from 'react'

import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

const App: React.FC = () => {
	return (
		<Router>
			<Routes />
		</Router>
	)
}

export default App
