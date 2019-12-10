import React, { useContext } from 'react'
import { UserContext } from 'pages/Dashboard'

export const MilestonesInterface = () => {
    const { userState } = useContext(UserContext)

    return (
        <div>
            <div>Milestones Interface</div>
            <div>Username: {userState.username}</div>
        </div>
    )
}
