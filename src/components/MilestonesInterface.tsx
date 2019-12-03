import React, { useContext } from 'react'
import { UserContext } from 'pages/Dashboard'

export const MilestonesInterface = () => {
    const user = useContext(UserContext)

    return (
        <div>
            <div>Milestones Interface</div>
            <div>Username: {user.state.username}</div>
        </div>
    )
}
