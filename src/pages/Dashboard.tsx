import { API, Auth } from 'aws-amplify'
import { getTheme } from '../theme/themes'
import { PotatoInterface } from '../components/PotatoInterface'
import { signUpConfig } from '../common/auth_config'
import { withAuthenticator } from 'aws-amplify-react'
import AmplifyTheme from '../theme/auth_theme'
import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import {v4} from 'uuid'

const defaultUserContext = {
    username: 'loading...',
    name: 'loading...',
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
            hasPotato: false
        },
    })
}

const Dashboard = () => {
    const [userState, setUserState] = useState(defaultUserContext)

    v4() //generate a random UUID

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

            if (
                Object.entries(response).length === 0 &&
                response.constructor === Object
            ) {
                //check if object is empty (no DB entry)
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
                <PotatoInterface />
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
