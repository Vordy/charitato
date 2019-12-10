import { AccountInterface } from 'components/AccountInterface'
import { Colors } from 'theme/Colors'
import { FriendsInterface } from 'components/FriendsInterface'
import { getTheme } from 'theme/themes'
import { LeaderboardsInterface } from 'components/LeaderboardsInterface'
import { MilestonesInterface } from 'components/MilestonesInterface'
import { incomingPotato, potatoIdentifier } from 'common/potato_lifecycle'
import { PotatoInterface } from 'components/PotatoInterface'
import { signUpConfig } from 'common/auth_config'
import { useHistory, useParams } from 'react-router'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { withAuthenticator } from 'aws-amplify-react'
import {
    defaultUserState,
    UserState,
    UserStateResource,
} from 'common/user_state'
import AmplifyTheme from 'theme/auth_theme'
import React, { createContext, useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { localize } from 'assets/strings/localize'
import { LoadingAnimation } from 'common/loading/loading'
import { MenuInterface } from 'components/MenuInterface'
import { PageNotFound } from './PageNotFound'

const DashboardPage = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

const InterfaceContainer = styled.div`
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

const MenuBarContainer = styled.div`
    background-color: ${getTheme().background};
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    z-index: 1000;
`

const MenuBar = styled.div`
    width: 50%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: ${Colors.LightGray};
    padding: 10px;
    border-radius: 999px;
`

export const UserContext = createContext({
    userState: defaultUserState,
    setLoading: (state: boolean) => {},
})

enum DashboardPages {
    POTATO = 'potato',
    MILESTONES = 'milestones',
    FRIENDS = 'friends',
    LEADERBOARDS = 'leaderboards',
    ACCOUNT = 'account',
}

// TODO: do this more elegantly
const inputToDashboard = (inputPage: string) => {
    switch (inputPage.toLowerCase()) {
        case DashboardPages.POTATO:
            return DashboardPages.POTATO
        case DashboardPages.MILESTONES:
            return DashboardPages.MILESTONES
        case DashboardPages.FRIENDS:
            return DashboardPages.FRIENDS
        case DashboardPages.LEADERBOARDS:
            return DashboardPages.LEADERBOARDS
        case DashboardPages.ACCOUNT:
            return DashboardPages.ACCOUNT
        default:
            return DashboardPages.POTATO
    }
}

const ErrorPage = () => {
    return <div>{localize('char.dashboard.error.text')}</div>
}

const Dashboard = () => {
    const [currentPage, setCurrentPage] = useState(DashboardPages.POTATO)
    const [loadingNewPotato, setLoadingNewPotato] = useState(false)
    const [loadingInterface, setLoadingInterface] = useState(false)
    const { inputPage } = useParams()
    const history = useHistory()
    const { user, reload } = UserStateResource()

    const setInterfaceLoading = (state: boolean) => {
        setLoadingInterface(state)
    }

    const isLoading = () => {
        return user.isLoading || loadingNewPotato || loadingInterface
    }

    useEffect(() => {
        const handleIncomingPage = async (
            userState: UserState,
            potatoID: string
        ) => {
            await incomingPotato(userState, potatoID)
            setLoadingNewPotato(false)
            history.push('/dashboard/potato')
        }

        // console.log(`useEffect: ${currentPage} to ${inputPage}`)
        if (inputPage !== undefined) {
            // check to see if this is an incoming potato load
            if (
                inputPage.substr(0, potatoIdentifier.length) ===
                potatoIdentifier
            ) {
                setLoadingNewPotato(true)
                handleIncomingPage(
                    user.state,
                    inputPage.substr(potatoIdentifier.length)
                )
            } else if (inputPage.toUpperCase() in DashboardPages) {
                // console.log(`Setting to ${inputToDashboard(inputPage)}`)
                setCurrentPage(inputToDashboard(inputPage))
            }
        }
    }, [inputPage, user.state])

    return (
        <Router>
            <DashboardPage>
                <InterfaceContainer>
                    <UserContext.Provider
                        value={{
                            setLoading: setInterfaceLoading,
                            userState: user.state,
                        }}
                    >
                        {!user.isError && isLoading() && (
                            <LoadingAnimation loading={user.isLoading} />
                        )}
                        {!user.isError && !user.isLoading && (
                            <Route
                                exact={true}
                                path="/dashboard"
                                component={PotatoInterface}
                            />
                        )}
                        {!user.isError && !user.isLoading && (
                            <Route
                                exact={true}
                                path="/dashboard/potato"
                                component={PotatoInterface}
                            />
                        )}
                        {!user.isError && !user.isLoading && (
                            <Route
                                exact={true}
                                path="/dashboard/leaderboards"
                                component={LeaderboardsInterface}
                            />
                        )}
                        {!user.isError && !user.isLoading && (
                            <Route
                                exact={true}
                                path="/dashboard/friends"
                                component={FriendsInterface}
                            />
                        )}
                        {!user.isError && !user.isLoading && (
                            <Route
                                exact={true}
                                path="/dashboard/account"
                                component={AccountInterface}
                            />
                        )}
                        {!user.isError && !user.isLoading && (
                            <Route
                                exact={true}
                                path="/dashboard/milestones"
                                component={MilestonesInterface}
                            />
                        )}
                    </UserContext.Provider>
                </InterfaceContainer>
                <MenuInterface />
            </DashboardPage>
        </Router>
    )
}

export default withAuthenticator(
    Dashboard,
    false,
    undefined,
    undefined,
    AmplifyTheme,
    signUpConfig
)
