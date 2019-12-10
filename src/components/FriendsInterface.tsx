import React, { useContext } from 'react'
import { UserContext } from 'pages/Dashboard'

export const FriendsInterface = () => {
    const { userState } = useContext(UserContext)

    return (
        <div>
            <div>Friends Interface</div>
            <div>Username: {userState.username}</div>
        </div>
    )
}
