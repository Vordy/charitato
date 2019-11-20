import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Home } from 'pages/Home'
import { Login } from 'common/login'
import { Dashboard } from 'pages/Dashboard'

export type Props = {
	appProps: {
		isAuthenticated: boolean;
		userHasAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
	}
}

// { appProps: { isAuthenticated: boolean; userHasAuthenticated: Dispatch<SetStateAction<boolean>>; }; }

export const Routes = ( appProps: Props ) => {
	return (
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/login" component={Login} />
			<Route exact path="/dashboard/:username" component={Dashboard} />
		</Switch>
	)
}
