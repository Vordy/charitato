import React from 'react'
import { withAuthenticator } from 'aws-amplify-react'
import { API } from 'aws-amplify'

const Dashboard = () => {
    const post = async () => {
        console.log('calling api')
        const response = await API.post('UserAPI', '/items', {
            body: {
                id: '1',
                name: 'hello amplify!',
            },
        })
        alert(JSON.stringify(response, null, 2))
    }
    const get = async () => {
        console.log('calling api')
        const response = await API.get('UserAPI', '/items/object/1', null)
        alert(JSON.stringify(response, null, 2))
    }
    const list = async () => {
        console.log('calling api')
        const response = await API.get('UserAPI', '/items/1', null)
        alert(JSON.stringify(response, null, 2))
    }

    return (
        <div className="App">
            <h1>API TEST</h1>
            <button onClick={post}>POST</button>
            <button onClick={get}>GET</button>
            <button onClick={list}>LIST</button>
        </div>
    )
}

export default withAuthenticator(Dashboard, true)
