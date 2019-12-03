import { getTheme } from 'theme/themes'
import { signUpConfig } from 'common/auth_config'
import { withAuthenticator } from 'aws-amplify-react'
import AmplifyTheme from 'theme/auth_theme'
import React, { useState, createContext, useContext } from 'react'
import styled from '@emotion/styled'
import {
    UserStateResource,
    UserResource,
    defaultUserResource,
} from 'common/user_state'
import { Button } from 'common/button/Button'
import { ButtonTypes, ButtonSizes } from 'common/button/ButtonUtils'

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

// TODO: this can also be off-loaded into another file
const Loading = () => {
    return <div>Loading...</div>
}

// TODO: These will be replaced by the actual interfaces from the Figma Prototype
// They should not be in this file either, this is just for developing the dashboard
const PotatoInterface = () => {
    const user = useContext(UserContext)

    return (
        <div>
            <div>Potato Interface</div>
            <div>Username: {user.state.username}</div>
        </div>
    )
}

const MilestonesInterface = () => {
    return <div>Milestones INTERFACE</div>
}

const FriendsInterface = () => {
    return <div>Friends INTERFACE</div>
}

const AccountInterface = () => {
    return <div>Account INTERFACE</div>
}

const LeaderboardsInterface = () => {
    return <div>Leaderboards INTERFACE</div>
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
