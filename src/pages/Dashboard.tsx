import React from 'react'
import { withAuthenticator } from 'aws-amplify-react';

const Dashboard = () => {

	return (
		<div>
			<h1>TEST</h1>
		</div>
	)
}

export default withAuthenticator(Dashboard, true);
