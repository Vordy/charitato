import React, { useContext } from 'react'
import { UserContext } from 'pages/Dashboard'

export const PotatoInterface = () => {
    const user = useContext(UserContext)

    return (
        <div>
            <div>Potato Interface</div>
            <div>Username: {user.state.username}</div>
        </div>
    )
}
