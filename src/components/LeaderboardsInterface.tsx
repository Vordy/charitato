import React, { useContext } from 'react'
import { UserContext } from 'pages/Dashboard'

export const LeaderboardsInterface = () => {
    const { userState } = useContext(UserContext)

    return (
        <div>
            <div>Leaderboards Interface</div>
            <div>Username: {userState.username}</div>
        </div>
    )
}
