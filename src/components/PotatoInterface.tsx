import React, { useContext, useState, useEffect } from 'react'
import { UserContext } from 'pages/Dashboard'

export const PotatoInterface = () => {
    const user = useContext(UserContext)
    const [hasPotato, setHasPotato] = useState(false)

    useEffect(() => {
        if (user.state.instance) {
            setHasPotato(user.state.instance.hasPotato)
        }
    }, [user.state.instance])

    return (
        <div>
            <div>Potato Interface</div>
            <div>Username: {user.state.username}</div>
            {hasPotato && <div>This user has a potato!</div>}
            {!hasPotato && <div>This user does not have a potato!</div>}
        </div>
    )
}
