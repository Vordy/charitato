import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Home } from 'pages/Home'
import { Login } from 'common/login'
import Dashboard from 'pages/Dashboard'

export const Routes = () => {
	return (
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/login" component={Login} />
			<Route exact path="/dashboard" component={Dashboard} />
		</Switch>
	)
}
