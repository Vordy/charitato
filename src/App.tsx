import { BrowserRouter as Router } from 'react-router-dom'
import { NavBar } from 'common/navbar'
import { Routes } from 'Routes'
import Amplify from 'aws-amplify'
import awsconfig from 'aws-exports'
import React from 'react'

Amplify.configure(awsconfig)

const App: React.FC = () => {
    return (
        <Router>
            <NavBar />
            <Routes />
        </Router>
    )
}

export default App
