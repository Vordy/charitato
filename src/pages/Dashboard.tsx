import { AccountInterface } from 'components/AccountInterface'
import { Button } from 'common/button/Button'
import { ButtonSizes, ButtonTypes } from 'common/button/ButtonUtils'
import { Colors } from 'theme/Colors'
import { FriendsInterface } from 'components/FriendsInterface'
import { getTheme } from 'theme/themes'
import { LeaderboardsInterface } from 'components/LeaderboardsInterface'
import { MilestonesInterface } from 'components/MilestonesInterface'
import { PotatoInterface } from 'components/PotatoInterface'
import { signUpConfig } from 'common/auth_config'
import { useHistory, useParams } from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom'
import { withAuthenticator } from 'aws-amplify-react'
import {
    defaultUserState,
    UserResource,
    UserStateResource,
} from 'common/user_state'
import AmplifyTheme from 'theme/auth_theme'
import React, { createContext, useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { localize } from 'assets/strings/localize'
import { MenuInterface } from 'components/MenuInterface'

const DashboardPage = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
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

export const UserContext = createContext(defaultUserState)

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

// TODO: this can be off-loaded into another file when we make it look nicer
const Loading = () => {
    return <div>{localize('char.dashboard.loading.text')}</div>
}

const ErrorPage = () => {
    return <div>{localize('char.dashboard.error.text')}</div>
}

const Dashboard = () => {
    const [currentPage, setCurrentPage] = useState(DashboardPages.POTATO)
    const { inputPage } = useParams()
    const history = useHistory()

    const user: UserResource = UserStateResource()

    useEffect(() => {
        // console.log(`useEffect: ${currentPage} to ${inputPage}`)
        if (inputPage !== undefined) {
            if (inputPage.toUpperCase() in DashboardPages) {
                // console.log(`Setting to ${inputToDashboard(inputPage)}`)
                setCurrentPage(inputToDashboard(inputPage))
            }
        }
    }, [inputPage])

    return (
        <Router>
            <DashboardPage>
                {/* <InterfaceContainer>
                    <UserContext.Provider value={user.state}>
                        {!user.isError && user.isLoading && <Loading />}
                        {!user.isError &&
                            !user.isLoading &&
                            currentPage === DashboardPages.POTATO && (
                                <PotatoInterface />
                            )}
                        {!user.isError &&
                            !user.isLoading &&
                            currentPage === DashboardPages.MILESTONES && (
                                <MilestonesInterface />
                            )}
                        {!user.isError &&
                            !user.isLoading &&
                            currentPage === DashboardPages.FRIENDS && (
                                <FriendsInterface />
                            )}
                        {!user.isError &&
                            !user.isLoading &&
                            currentPage === DashboardPages.LEADERBOARDS && (
                                <LeaderboardsInterface />
                            )}
                        {!user.isError &&
                            !user.isLoading &&
                            currentPage === DashboardPages.ACCOUNT && (
                                <AccountInterface />
                            )}
                        {user.isError && <ErrorPage />}
                    </UserContext.Provider>
                </InterfaceContainer> */}
                <MenuInterface></MenuInterface>
                <Route exact path="/" component={MilestonesInterface} />
                <Route exact path="/leaderboards" component={LeaderboardsInterface} />
                <Route exact path="/potato" component={PotatoInterface} />
                <Route exact path="/friends" component={FriendsInterface} />
                <Route exact path="/account" component={AccountInterface} />
            </DashboardPage>
        </Router>
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
