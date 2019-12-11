import React, { useContext } from 'react'
import { DashboardContext } from 'pages/Dashboard'

export const MilestonesInterface = () => {
    const { userState } = useContext(DashboardContext)

    return (
        <div>
            <div>Milestones Interface</div>
            <div>Username: {userState.username}</div>
        </div>
    )
}
