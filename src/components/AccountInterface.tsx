import React, { useContext } from 'react'
import { UserContext } from 'pages/Dashboard'
import { Button } from 'common/button/Button'
import { ButtonSizes, ButtonTypes } from 'common/button/ButtonUtils'
import { Auth } from 'aws-amplify'

export const AccountInterface = () => {
    const user = useContext(UserContext)

    const handleSignOut = (e: React.MouseEvent) => {
        Auth.signOut()
    }

    return (
        <div>
            <div>Account Interface</div>
            <div>Username: {user.username}</div>
            <Button
                buttonSize={ButtonSizes.Large}
                buttonType={ButtonTypes.Primary}
                text={'Sign out'}
                onClickHandler={handleSignOut}
            />
        </div>
    )
}
