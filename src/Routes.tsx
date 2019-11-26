import { Home } from 'pages/Home'
import { Login } from 'common/login'
import { RecPotato } from 'pages/RecPotato'
import { Route, Switch } from 'react-router-dom'
import Dashboard from 'pages/Dashboard'
import React from 'react'

export const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/dashboard" component={Dashboard} />
			<Route exact path="/potato/:potatoID" component={RecPotato} />
        </Switch>
    )
}
