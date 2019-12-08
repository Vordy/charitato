import React, { useEffect, useState } from 'react'
import { InterfaceContainer } from 'common/dashboard/potato_styles'
import { UserResource, UserStateResource } from 'common/user_state'
import { useParams, useHistory } from 'react-router'
import { checkStatus, UserPotatoStatus } from 'common/potato_lifecycle'

const FullMessage = ({ handler }: { handler: () => void }) => {
    return (
        <div onClick={handler}>
            Sorry, you already have a potato. Send it first!
        </div>
    )
}

const NoAccountMessage = ({ handler }: { handler: () => void }) => {
    return <div onClick={handler}>Make and account dawg!</div>
}

const GoodAccountMessage = ({ handler }: { handler: () => void }) => {
    return (
        <div onClick={handler}>
            You got an account and space to get a potato!
        </div>
    )
}

export const IncPotato = () => {
    const { potatoID } = useParams()
    const user: UserResource = UserStateResource()
    const [status, setStatus] = useState()
    const history = useHistory()

    useEffect(() => {
        setStatus(checkStatus(user.state))
    }, [user.state])

    const handleGoToDashboard = () => {
        history.push(`/dashboard/${potatoID}`)
    }

    return (
        <InterfaceContainer>
            {status === UserPotatoStatus.FULL && (
                <FullMessage handler={handleGoToDashboard} />
            )}
            {status === UserPotatoStatus.NOAC && (
                <NoAccountMessage handler={handleGoToDashboard} />
            )}
            {status === UserPotatoStatus.GOOD && (
                <GoodAccountMessage handler={handleGoToDashboard} />
            )}
        </InterfaceContainer>
    )
}
