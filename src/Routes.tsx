import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Login } from 'common/login'

const SayHello = () => <h1>Hello!</h1>

const SayGoodbye = () => <h1>Goodbye</h1>

export const Routes = () => {
	return (
		<Switch>
			<Route exact path="/" component={Login} />
			<Route exact path="/hello" component={SayHello} />
			<Route exact path="/goodbye" component={SayGoodbye} />
		</Switch>
	)
}
