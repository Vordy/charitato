import React, { useContext } from 'react'
import { UserContext } from 'pages/Dashboard'

export const AccountInterface = () => {
    const user = useContext(UserContext)

    return (
        <div>
            <div>Account Interface</div>
            <div>Username: {user.username}</div>
        </div>
    )
}
