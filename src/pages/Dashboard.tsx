import { API, Auth } from 'aws-amplify'
import { getTheme } from '../theme/themes'
import { PotatoInterface } from '../components/PotatoInterface'
import { signUpConfig } from '../common/auth_config'
import { withAuthenticator } from 'aws-amplify-react'
import AmplifyTheme from '../theme/auth_theme'
import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'

const defaultUserContext = {
    username: 'loading...',
    name: 'loading...',
    hasPotato: false,
}

export const UserContext = React.createContext(defaultUserContext)

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

const getAuth = async () => {
    try {
        const user = await Auth.currentAuthenticatedUser()
        return user
    } catch (err) {
        return null
    }
}

const setUpUserInstance = async (user: any) => {
    await API.post('UserAPI', '/items', {
        body: {
            id: user.getUsername(),
            name: user.attributes.name,
            hasPotato: false,
        },
    })
}

const Dashboard = () => {
    const [userState, setUserState] = useState(defaultUserContext)

    useEffect(() => {
        const getUserInstance = async () => {
            const user = await getAuth()
            if (user === null) {
                alert('Site error: user not authenticated while in Dashboard')
            }

            const response = await API.get(
                'UserAPI',
                `/items/object/${user.username}`,
                null
            )

            //check if object is empty (no DB entry)
            if (
                Object.entries(response).length === 0 &&
                response.constructor === Object
            ) {
                setUpUserInstance(user)
                const newUser = await API.get(
                    'UserAPI',
                    `/items/object/${user.username}`,
                    null
                )
                setUserState(newUser)
            }
            setUserState(response)
        }
        getUserInstance()
    }, [])

    return (
        <UserContext.Provider value={userState}>
            <DashboardContainer>
                <PotatoInterface />
            </DashboardContainer>
        </UserContext.Provider>
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
