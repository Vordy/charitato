import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Login } from 'common/login'
import { Dashboard } from 'pages/Dashboard'

export const Routes = () => {
	return (
		<Switch>
			<Route exact path="/" component={Login} />
			<Route exact path="/dashboard" component={Dashboard} />
		</Switch>
	)
}
