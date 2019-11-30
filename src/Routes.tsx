import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Home } from 'pages/Home'
import { Login } from 'common/login'
import Dashboard from 'pages/Dashboard'

export const Routes = () => {
    return (
        <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route exact={true} path="/login" component={Login} />
            <Route exact={true} path="/dashboard" component={Dashboard} />
        </Switch>
    )
}
