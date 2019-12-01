import { API } from 'aws-amplify'
import { getTheme } from 'theme/themes'
import { signUpConfig } from 'common/auth_config'
import { withAuthenticator } from 'aws-amplify-react'
import { PotatoInterface } from 'components/PotatoInterface'
import AmplifyTheme from 'theme/auth_theme'
import React from 'react'
import styled from '@emotion/styled'

const DashboardContainer = styled.div`
    width: 100%;
    height: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    color: ${getTheme().foreground};
    background-color: ${getTheme().background};
    font-family: 'Helvetica Nueue', roboto, Arial, Helvetica, sans-serif;
`

const ALERT_NUMBER = 2

const Dashboard = () => {
    const post = async () => {
        const response = await API.post('UserAPI', '/items', {
            body: {
                id: '1',
                name: 'hello amplify!',
            },
        })
        alert(JSON.stringify(response, null, ALERT_NUMBER))
    }
    const get = async () => {
        const response = await API.get('UserAPI', '/items/object/1', null)
        alert(JSON.stringify(response, null, ALERT_NUMBER))
    }
    const list = async () => {
        const response = await API.get('UserAPI', '/items/1', null)
        alert(JSON.stringify(response, null, ALERT_NUMBER))
    }

    return (
        <DashboardContainer>
            <PotatoInterface />
            <PotatoInterface />
            <PotatoInterface />
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
