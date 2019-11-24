import { API } from 'aws-amplify'
import { signUpConfig } from '../common/auth_config'
import { withAuthenticator } from 'aws-amplify-react'
import { getTheme } from '../theme/themes'
import AmplifyTheme from '../theme/auth_theme'
import React from 'react'
import styled from '@emotion/styled'

const DashboardContainer = styled.div`
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex;
    color: ${getTheme().foreground};
    background-color: ${getTheme().background};
    font-family: 'Helvetica Nueue', roboto, Arial, Helvetica, sans-serif;
`

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
        <DashboardContainer>
            <h1>API TEST</h1>
            <button onClick={post}>POST</button>
            <button onClick={get}>GET</button>
            <button onClick={list}>LIST</button>
        </DashboardContainer>
    )
}

export default withAuthenticator(
    Dashboard,
    true,
    undefined,
    undefined,
    AmplifyTheme,
    signUpConfig
)
