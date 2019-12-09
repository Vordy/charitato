import React, { useEffect, useState } from 'react'
import { UserStateResource } from 'common/user_state'
import { useParams, useHistory } from 'react-router'
import {
    checkStatus,
    UserPotatoStatus,
    potatoIdentifier,
} from 'common/potato_lifecycle'
import { PotatoTypes, Potato } from 'assets/potatoes/potato'
import {
    PotatoModeContainer,
    PotatoTitleText,
    PotatoSubTitleText,
    InterfaceContainer,
} from 'common/dashboard/potato_styles'
import { Button } from 'common/button/Button'
import { ButtonSizes, ButtonTypes } from 'common/button/ButtonUtils'
import { ContinueButton } from 'common/dashboard/incoming_styles'

// TODO: add all text to english strings
const full_msg = {
    potatoType: PotatoTypes.Fresh,
    text: "You can't hold another charitato",
    subtext: 'Send the one you have first!',
}

// TODO: these two will need to populate based on charitato data
const good_msg = {
    potatoType: PotatoTypes.Hot,
    text: "You've received a potato!",
    subtext: 'The temp goes here!',
}

const noac_msg = {
    potatoType: PotatoTypes.Hot,
    text: "You've received a potato!",
    subtext: 'Create an account to send it before it explodes!',
}

const def_msg = {
    potatoType: PotatoTypes.Fresh,
    text: '',
    subtext: '',
}

export const IncPotato = () => {
    const { potatoID } = useParams()
    const user = UserStateResource()
    const [status, setStatus] = useState()
    const history = useHistory()
    let msg = def_msg

    useEffect(() => {
        setStatus(checkStatus(user.state))
    }, [user.state])

    const handleGoToDashboard = () => {
        history.push(`/dashboard/${potatoIdentifier}${potatoID}`)
    }

    if (status === UserPotatoStatus.GOOD) {
        msg = good_msg
    } else if (status === UserPotatoStatus.FULL) {
        msg = full_msg
    } else if (status === UserPotatoStatus.NOAC) {
        msg = noac_msg
    }

    return (
        <InterfaceContainer>
            {user.isLoading && <div>Loading...</div>}
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
        </InterfaceContainer>
    )
}
