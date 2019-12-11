import React, { useContext } from 'react'
import { DashboardContext } from 'pages/Dashboard'

export const LeaderboardsInterface = () => {
    const { userState } = useContext(DashboardContext)

    return (
        <div>
            <div>Leaderboards Interface</div>
            <div>Username: {userState.username}</div>
        </div>
    )
}
