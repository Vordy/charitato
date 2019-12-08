import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from 'pages/Dashboard'

export const PotatoInterface = () => {
    const userState = useContext(UserContext)
    const [hasPotato, setHasPotato] = useState(false)

    useEffect(() => {
        if (userState.instance) {
            setHasPotato(userState.instance.hasPotato)
        }
    }, [userState.instance]) // only recalls useEffect if the user instance changes

    return (
        <div>
            <div>Potato Interface</div>
            <div>Username: {userState.username}</div>
            {hasPotato && <div>This user has a potato!</div>}
            {!hasPotato && <div>This user does not have a potato!</div>}
        </div>
    )
}
