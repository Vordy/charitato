import { Home } from 'pages/Home'
import { Login } from 'common/login'
import { RecPotato } from 'pages/RecPotato'
import { Route, Switch } from 'react-router-dom'
import Dashboard from 'pages/Dashboard'
import React from 'react'

export const Routes = () => {
    return (
        <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route exact={true} path="/login" component={Login} />
            <Route exact={true} path="/dashboard" component={Dashboard} />
        </Switch>
    )
}
