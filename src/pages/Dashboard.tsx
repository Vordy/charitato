import { getTheme } from 'theme/themes'
import { PotatoInterface } from 'components/PotatoInterface'
import { signUpConfig } from 'common/auth_config'
import { withAuthenticator } from 'aws-amplify-react'
import AmplifyTheme from 'theme/auth_theme'
import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { UserStateResource, UserResource } from 'common/user_state'

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

const Loading = () => {
    return <div>Loading...</div>
}

const Dashboard = () => {
    const user: UserResource = UserStateResource()
    const [userState, setUserState] = useState({})

    // useEffect(() => {
    //     if(user.isLoading)
    // })

    return (
        <DashboardContainer>
            {user.isLoading && <Loading />}
            {!user.isLoading && <div>{user.state.username}</div>}
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
