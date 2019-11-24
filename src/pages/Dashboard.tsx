import { API } from 'aws-amplify'
import { withAuthenticator } from 'aws-amplify-react'
import React from 'react'

const signUpConfig = {
    hiddenDefaults: ['phone_number', 'email'],
    signUpFields: [
        { label: 'Name (i.e. Daniel S)', key: 'name', displayOrder: 1, required: true, type: 'string' },
        { label: 'Email', key: 'username', displayOrder: 2, required: true, type: 'email' },
        { label: 'Password', key: 'password', displayOrder: 3, required: true, type: 'password' },
    ],
}

const auth_theme = {
    SectionBody: { 'background-color': 'red' },
}

const Dashboard = () => {
    const post = async () => {
        const response = await API.post('UserAPI', '/items', {
            body: {
                id: '1',
                name: 'hello amplify!',
            },
        })
        alert(JSON.stringify(response, null, 2))
    }
    const get = async () => {
        const response = await API.get('UserAPI', '/items/object/1', null)
        alert(JSON.stringify(response, null, 2))
    }
    const list = async () => {
        const response = await API.get('UserAPI', '/items/1', null)
        alert(JSON.stringify(response, null, 2))
    }

    return (
        <div>
            <h1>API TEST</h1>
            <button onClick={post}>POST</button>
            <button onClick={get}>GET</button>
            <button onClick={list}>LIST</button>
        </div>
    )
}

export default withAuthenticator(
    Dashboard,
    true,
    undefined,
    undefined,
    undefined,
    signUpConfig
)
