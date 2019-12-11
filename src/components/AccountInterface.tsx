import React, { useContext } from 'react'
import { DashboardContext } from 'pages/Dashboard'
import { Button } from 'common/button/Button'
import { ButtonSizes, ButtonTypes } from 'common/button/ButtonUtils'
import { Auth } from 'aws-amplify'

export const AccountInterface = () => {
    const { userState } = useContext(DashboardContext)

    const handleSignOut = (e: React.MouseEvent) => {
        Auth.signOut()
    }

    return (
        <div>
            <div>Account Interface</div>
            <div>Username: {userState.username}</div>
            <Button
                buttonSize={ButtonSizes.Large}
                buttonType={ButtonTypes.Primary}
                text={'Sign out'}
                onClickHandler={handleSignOut}
            />
        </div>
    )
}
