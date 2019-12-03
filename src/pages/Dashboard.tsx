import { Button } from 'common/button/Button'
import { ButtonSizes, ButtonTypes } from 'common/button/ButtonUtils'
import { getTheme } from 'theme/themes'
import { signUpConfig } from 'common/auth_config'
import { withAuthenticator } from 'aws-amplify-react'
import AmplifyTheme from 'theme/auth_theme'
import React, { createContext, useState } from 'react'
import styled from '@emotion/styled'
import {
    defaultUserResource,
    UserResource,
    UserStateResource,
} from 'common/user_state'
import { PotatoInterface } from 'components/PotatoInterface'
import { MilestonesInterface } from 'components/MilestonesInterface'
import { FriendsInterface } from 'components/FriendsInterface'
import { LeaderboardsInterface } from 'components/LeaderboardsInterface'
import { AccountInterface } from 'components/AccountInterface'

const DashboardPage = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
`

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

const MenuBar = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const UserContext = createContext(defaultUserResource)

// TODO: this can be off-loaded into another file when we make it look nicer
const Loading = () => {
    return <div>Loading...</div>
}

const Dashboard = () => {
    const [currentPage, setCurrentPage] = useState('POTATO')

    const user: UserResource = UserStateResource()

    const handlePageChange = (page: string) => {
        setCurrentPage(page)
    }

    return (
        <DashboardPage>
            <DashboardContainer>
                <UserContext.Provider value={user}>
                    {user.isLoading && <Loading />}
                    {!user.isLoading && currentPage === 'POTATO' && (
                        <PotatoInterface />
                    )}
                    {!user.isLoading && currentPage === 'MILESTONES' && (
                        <MilestonesInterface />
                    )}
                    {!user.isLoading && currentPage === 'FRIENDS' && (
                        <FriendsInterface />
                    )}
                    {!user.isLoading && currentPage === 'LEADERBOARDS' && (
                        <LeaderboardsInterface />
                    )}
                    {!user.isLoading && currentPage === 'ACCOUNT' && (
                        <AccountInterface />
                    )}
                </UserContext.Provider>
            </DashboardContainer>
            <MenuBar>
                <Button
                    buttonType={ButtonTypes.Primary}
                    buttonSize={ButtonSizes.Large}
                    text={'Milestones'}
                    onClickHandler={(event: React.MouseEvent) => {
                        handlePageChange('MILESTONES')
                    }}
                />
                <Button
                    buttonType={ButtonTypes.Primary}
                    buttonSize={ButtonSizes.Large}
                    text={'Leaderboards'}
                    onClickHandler={(event: React.MouseEvent) => {
                        handlePageChange('LEADERBOARDS')
                    }}
                />
                <Button
                    buttonType={ButtonTypes.Primary}
                    buttonSize={ButtonSizes.Large}
                    text={'Potato'}
                    onClickHandler={(event: React.MouseEvent) => {
                        handlePageChange('POTATO')
                    }}
                />
                <Button
                    buttonType={ButtonTypes.Primary}
                    buttonSize={ButtonSizes.Large}
                    text={'Friends'}
                    onClickHandler={(event: React.MouseEvent) => {
                        handlePageChange('FRIENDS')
                    }}
                />
                <Button
                    buttonType={ButtonTypes.Primary}
                    buttonSize={ButtonSizes.Large}
                    text={'Account'}
                    onClickHandler={(event: React.MouseEvent) => {
                        handlePageChange('ACCOUNT')
                    }}
                />
            </MenuBar>
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
