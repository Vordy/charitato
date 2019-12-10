import { AccountInterface } from 'components/AccountInterface'
import { FriendsInterface } from 'components/FriendsInterface'
import { getTheme } from 'theme/themes'
import { LeaderboardsInterface } from 'components/LeaderboardsInterface'
import { MilestonesInterface } from 'components/MilestonesInterface'
import { incomingPotato, potatoIdentifier } from 'common/potato_lifecycle'
import { PotatoInterface } from 'components/PotatoInterface'
import { signUpConfig } from 'common/auth_config'
import { useParams } from 'react-router'
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

export enum DashboardPages {
    POTATO = 'potato',
    MILESTONES = 'milestones',
    FRIENDS = 'friends',
    LEADERBOARDS = 'leaderboards',
    ACCOUNT = 'account',
}

export const UserContext = createContext({
    setLoading: (state: boolean) => {
        return
    },
    userState: defaultUserState,
})

export const PageContext = createContext({
    page: DashboardPages.POTATO,
    setPage: (page: DashboardPages) => {
        return
    },
})

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
    const [loadingDashboard, setLoadingDashboard] = useState(false)
    const { inputPage } = useParams()
    const { user, reload } = UserStateResource()

    const setInterfaceLoading = (state: boolean) => {
        setLoadingInterface(state)
    }

    const changePage = (page: DashboardPages) => {
        setCurrentPage(page)
    }

    // Loading dashboard
    useEffect(() => {
        console.log(
            `${loadingInterface} || ${loadingNewPotato} || ${user.isLoading}`
        )
        setLoadingDashboard(
            loadingInterface || loadingNewPotato || user.isLoading
        )
    }, [loadingInterface, loadingNewPotato, user.isLoading])

    useEffect(() => {
        const handleIncomingPage = async (
            userState: UserState,
            potatoID: string
        ) => {
            await incomingPotato(userState, potatoID)
            setLoadingNewPotato(false)
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
        <DashboardPage>
            <InterfaceContainer>
                <UserContext.Provider
                    value={{
                        setLoading: setInterfaceLoading,
                        userState: user.state,
                    }}
                >
                    {!user.isError && loadingDashboard && (
                        <LoadingAnimation loading={true} />
                    )}
                    {!user.isError &&
                        !loadingDashboard &&
                        currentPage === DashboardPages.POTATO && (
                            <PotatoInterface />
                        )}
                    {!user.isError &&
                        !loadingDashboard &&
                        currentPage === DashboardPages.MILESTONES && (
                            <MilestonesInterface />
                        )}
                    {!user.isError &&
                        !loadingDashboard &&
                        currentPage === DashboardPages.FRIENDS && (
                            <FriendsInterface />
                        )}
                    {!user.isError &&
                        !loadingDashboard &&
                        currentPage === DashboardPages.LEADERBOARDS && (
                            <LeaderboardsInterface />
                        )}
                    {!user.isError &&
                        !loadingDashboard &&
                        currentPage === DashboardPages.ACCOUNT && (
                            <AccountInterface />
                        )}
                    {user.isError && <ErrorPage />}
                </UserContext.Provider>
            </InterfaceContainer>
            <PageContext.Provider
                value={{ page: currentPage, setPage: changePage }}
            >
                <MenuInterface />
            </PageContext.Provider>
        </DashboardPage>
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
