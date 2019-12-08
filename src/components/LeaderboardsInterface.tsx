import React, { useContext } from 'react'
import { UserContext } from 'pages/Dashboard'

export const LeaderboardsInterface = () => {
    const user = useContext(UserContext)

    return (
        <div>
            <div>Leaderboards Interface</div>
            <div>Username: {user.username}</div>
        </div>
    )
}
