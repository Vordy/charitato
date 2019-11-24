import { BrowserRouter as Router } from 'react-router-dom'
import { Routes } from './Routes'
import Amplify from 'aws-amplify'
import awsconfig from './aws-exports'
import React from 'react'
import { NavBar } from './common/navbar'

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
