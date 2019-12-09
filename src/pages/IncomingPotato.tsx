import { Button } from 'common/button/Button'
import { ButtonSizes, ButtonTypes } from 'common/button/ButtonUtils'
import { ContinueButton } from 'common/dashboard/incoming_styles'
import { Potato, PotatoTypes } from 'assets/potatoes/potato'
import { useHistory, useParams } from 'react-router'
import { UserStateResource } from 'common/user_state'
import {
    checkStatus,
    potatoIdentifier,
    UserPotatoStatus,
} from 'common/potato_lifecycle'
import {
    InterfaceContainer,
    PotatoModeContainer,
    PotatoSubTitleText,
    PotatoTitleText,
} from 'common/dashboard/potato_styles'
import React, { useEffect, useState } from 'react'
import { Loading } from './Loading'
import { DashboardBlob } from 'assets/blobs/DashboardBlob'

// TODO: add all text to english strings
const fullMsg = {
    potatoType: PotatoTypes.Fresh,
    subtext: 'Send the one you have first!',
    text: "You can't hold another charitato",
}

// TODO: these two will need to populate based on charitato data
const goodMsg = {
    potatoType: PotatoTypes.Hot,
    subtext: 'The temp goes here!',
    text: "You've received a potato!",
}

const noacMsg = {
    potatoType: PotatoTypes.Hot,
    subtext: 'Create an account to send it before it explodes!',
    text: "You've received a potato!",
}

const defMsg = {
    potatoType: PotatoTypes.Fresh,
    subtext: '',
    text: '',
}

export const IncPotato = () => {
    const { potatoID } = useParams()
    const user = UserStateResource()
    const [status, setStatus] = useState()
    const history = useHistory()
    let msg = defMsg

    useEffect(() => {
        setStatus(checkStatus(user.state))
    }, [user.state])

    const handleGoToDashboard = () => {
        history.push(`/dashboard/${potatoIdentifier}${potatoID}`)
    }

    if (status === UserPotatoStatus.GOOD) {
        msg = goodMsg
    } else if (status === UserPotatoStatus.FULL) {
        msg = fullMsg
    } else if (status === UserPotatoStatus.NOAC) {
        msg = noacMsg
    }

    return (
        <InterfaceContainer>
            {user.isLoading && <Loading />}
            {!user.isLoading && (
                <PotatoModeContainer>
                    <Potato
                        type={msg.potatoType}
                        style={{ gridArea: 'splash' }}
                    />
                    <PotatoTitleText>{msg.text}</PotatoTitleText>
                    <PotatoSubTitleText>{msg.subtext}</PotatoSubTitleText>
                    <ContinueButton>
                        <Button
                            onClickHandler={handleGoToDashboard}
                            buttonSize={ButtonSizes.Large}
                            buttonType={ButtonTypes.Primary}
                            text={'Continue...'}
                        />
                    </ContinueButton>
                </PotatoModeContainer>
            )}
            <DashboardBlob
                style={{ position: 'absolute', top: '0%', right: '0%' }}
            />
        </InterfaceContainer>
    )
}
