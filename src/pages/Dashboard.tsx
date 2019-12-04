import { Button } from 'common/button/Button'
import { ButtonSizes, ButtonTypes } from 'common/button/ButtonUtils'
import { getTheme } from 'theme/themes'
import { signUpConfig } from 'common/auth_config'
import { withAuthenticator } from 'aws-amplify-react'
import AmplifyTheme from 'theme/auth_theme'
import React, { createContext, useState, useEffect } from 'react'
import styled from '@emotion/styled'
import {
    defaultUserState,
    UserResource,
    UserStateResource,
} from 'common/user_state'
import { PotatoInterface } from 'components/PotatoInterface'
import { MilestonesInterface } from 'components/MilestonesInterface'
import { FriendsInterface } from 'components/FriendsInterface'
import { LeaderboardsInterface } from 'components/LeaderboardsInterface'
import { AccountInterface } from 'components/AccountInterface'
import { Colors } from 'theme/Colors'
import { useParams, useHistory } from 'react-router'

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
    return <div>Loading...</div>
}

const Dashboard = () => {
    const [currentPage, setCurrentPage] = useState(DashboardPages.POTATO)
    const { inputPage } = useParams()
    const history = useHistory()

    const user: UserResource = UserStateResource()

    useEffect(() => {
        console.log(`useEffect: ${currentPage} to ${inputPage}`)
        if (inputPage !== undefined) {
            if (inputPage.toUpperCase() in DashboardPages) {
                console.log(`Setting to ${inputToDashboard(inputPage)}`)
                setCurrentPage(inputToDashboard(inputPage))
            }
        }
    }, [inputPage])

    return (
        <DashboardPage>
            <InterfaceContainer>
                <UserContext.Provider value={user.state}>
                    {user.isLoading && <Loading />}
                    {!user.isLoading &&
                        currentPage === DashboardPages.POTATO && (
                            <PotatoInterface />
                        )}
                    {!user.isLoading &&
                        currentPage === DashboardPages.MILESTONES && (
                            <MilestonesInterface />
                        )}
                    {!user.isLoading &&
                        currentPage === DashboardPages.FRIENDS && (
                            <FriendsInterface />
                        )}
                    {!user.isLoading &&
                        currentPage === DashboardPages.LEADERBOARDS && (
                            <LeaderboardsInterface />
                        )}
                    {!user.isLoading &&
                        currentPage === DashboardPages.ACCOUNT && (
                            <AccountInterface />
                        )}
                </UserContext.Provider>
            </InterfaceContainer>
            <MenuBarContainer>
                <MenuBar>
                    <Button
                        buttonType={ButtonTypes.Primary}
                        buttonSize={ButtonSizes.Small}
                        text={'Milestones'}
                        onClickHandler={(event: React.MouseEvent) => {
                            // handlePageChange(DashboardPages.MILESTONES)
                            history.push(`/dashboard/milestones`)
                        }}
                    />
                    <Button
                        buttonType={ButtonTypes.Primary}
                        buttonSize={ButtonSizes.Small}
                        text={'Leaderboards'}
                        onClickHandler={(event: React.MouseEvent) => {
                            // handlePageChange(DashboardPages.LEADERBOARDS)
                            history.push(`/dashboard/leaderboards`)
                        }}
                    />
                    <Button
                        buttonType={ButtonTypes.Primary}
                        buttonSize={ButtonSizes.Small}
                        text={'Potato'}
                        onClickHandler={(event: React.MouseEvent) => {
                            // handlePageChange(DashboardPages.POTATO)
                            history.push(`/dashboard/potato`)
                        }}
                    />
                    <Button
                        buttonType={ButtonTypes.Primary}
                        buttonSize={ButtonSizes.Small}
                        text={'Friends'}
                        onClickHandler={(event: React.MouseEvent) => {
                            // handlePageChange(DashboardPages.FRIENDS)
                            history.push(`/dashboard/friends`)
                        }}
                    />
                    <Button
                        buttonType={ButtonTypes.Primary}
                        buttonSize={ButtonSizes.Small}
                        text={'Account'}
                        onClickHandler={(event: React.MouseEvent) => {
                            // handlePageChange(DashboardPages.ACCOUNT)
                            history.push(`/dashboard/account`)
                        }}
                    />
                </MenuBar>
            </MenuBarContainer>
        </DashboardPage>
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
