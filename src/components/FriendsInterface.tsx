import React, { useContext } from 'react'
import { DashboardContext } from 'pages/Dashboard'

export const FriendsInterface = () => {
    const { userState } = useContext(DashboardContext)

    return (
        <div>
            <div>Friends Interface</div>
            <div>Username: {userState.username}</div>
        </div>
    )
}
