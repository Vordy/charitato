import React, { useContext } from 'react'
import { UserContext } from 'pages/Dashboard'

export const FriendsInterface = () => {
    const user = useContext(UserContext)

    return (
        <div>
            <div>Friends Interface</div>
            <div>Username: {user.username}</div>
        </div>
    )
}
