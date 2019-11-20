import React from 'react'
import { Switch } from 'react-router-dom'
import { Home } from 'pages/Home'
import { Login } from 'common/login'
import { Dashboard } from 'pages/Dashboard'
import AppliedRoute from "./components/AppliedRoute";

export type Props = {
	appProps: {
		isAuthenticated: boolean;
		userHasAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
	}
}

// { appProps: { isAuthenticated: boolean; userHasAuthenticated: Dispatch<SetStateAction<boolean>>; }; }

export const Routes = ( appProps: Props ) => {

	// const dBoard = appProps.appProps.isAuthenticated ? <AppliedRoute exact path="/dashboard/:username" component={Dashboard} appProps={appProps} /> : <AppliedRoute exact path="/dashboard/:username" component={Home} appProps={appProps} />

	return (
		<Switch>
			<AppliedRoute exact path="/" component={Home} appProps={appProps} />
			<AppliedRoute exact path="/login" component={Login} appProps={appProps} />
			<AppliedRoute exact path="/dashboard/:username" component={Dashboard} appProps={appProps} />
			{/* {dBoard} */}
		</Switch>
	)
}
