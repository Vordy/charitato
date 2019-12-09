import { Button } from 'common/button/Button'
import { ButtonTypes, ButtonSizes } from 'common/button/ButtonUtils'
import { Potato, PotatoTypes } from 'assets/potatoes/potato'
import { UserContext } from 'pages/Dashboard'
import {
    BigText,
    CopyBox,
    CopyContainer,
    CopyMessage,
    Or,
    SendingModeContainer,
} from 'common/dashboard/sending_styles'
import {
    calculatePotatoType,
    potatoInfo,
    PotatoStateResource,
} from 'common/potato_state'
import {
    InterfaceContainer,
    PotatoButton,
    PotatoModeContainer,
    PotatoSubTitleText,
    PotatoTitleText,
    PotatoContainer,
} from 'common/dashboard/potato_styles'
import copy from 'clipboard-copy'
import React, { createContext, useContext, useState } from 'react'

// For passing in the page changer to the modes
interface ModeProps {
    changeMode: React.Dispatch<React.SetStateAction<string>>
}

// for passing down potato info into modes
const PotatoContext = createContext(potatoInfo)

// for viewing a potato (or lack thereof)
const PotatoMode = ({ changeMode }: ModeProps) => {
    const potatoContext = useContext(PotatoContext)
    let toggleButtonGrayedOut = false

    if (potatoContext.potatoType === PotatoTypes.Fresh) {
        toggleButtonGrayedOut = true
    }

    const handleNewPotatoClick = () => {
        console.log('Creating potato dawg')
    }

    const handlePotatoInfoClick = () => {
        alert('PotatoInfo still in development, check back later!')
    }

    const handlePotatoClick = () => {
        changeMode('SendingMode')
    }

    return (
        <PotatoModeContainer>
            <PotatoContainer onClick={handlePotatoClick}>
                <Potato type={potatoContext.potatoType} />
            </PotatoContainer>
            <PotatoTitleText>{potatoContext.potatoTitleText}</PotatoTitleText>
            <PotatoSubTitleText>
                {potatoContext.potatoSubTitleText}
            </PotatoSubTitleText>
            {!toggleButtonGrayedOut && (
                <PotatoButton
                    style={{
                        opacity: '30%',
                        gridArea: 'button1',
                        justifySelf: 'end',
                    }}
                >
                    +
                </PotatoButton>
            )}
            {toggleButtonGrayedOut && (
                <PotatoButton
                    style={{
                        cursor: 'pointer',
                        gridArea: 'button1',
                        justifySelf: 'end',
                    }}
                    onClick={handleNewPotatoClick}
                >
                    +
                </PotatoButton>
            )}
            {toggleButtonGrayedOut && (
                <PotatoButton
                    style={{
                        opacity: '30%',
                        gridArea: 'button2',
                        justifySelf: 'start',
                    }}
                >
                    i
                </PotatoButton>
            )}
            {!toggleButtonGrayedOut && (
                <PotatoButton
                    style={{
                        cursor: 'pointer',
                        gridArea: 'button2',
                        justifySelf: 'start',
                    }}
                    onClick={handlePotatoInfoClick}
                >
                    i
                </PotatoButton>
            )}
        </PotatoModeContainer>
    )
}

const SendingMode = ({ changeMode }: ModeProps) => {
    const potatoContext = useContext(PotatoContext)
    const [copied, setCopied] = useState(false)
    const url = window.location.host + '/rec/' + potatoContext.id

    const handleCopy = (event: React.MouseEvent) => {
        copy(url)
        setCopied(true)
    }

    const handleBack = (event: React.MouseEvent) => {
        changeMode('PotatoMode')
    }

    return (
        <SendingModeContainer>
            <BigText>Send the charitato before it explodes!</BigText>
            <CopyContainer>
                <CopyBox>{url}</CopyBox>
                <Button
                    buttonType={ButtonTypes.Primary}
                    buttonSize={ButtonSizes.Small}
                    text={'Copy'}
                    onClickHandler={handleCopy}
                />
                {copied && <CopyMessage>Copied!</CopyMessage>}
            </CopyContainer>
            <Or>
                <hr style={{ width: '100%' }} />
                Or
                <hr style={{ width: '100%' }} />
            </Or>
            <Button
                buttonType={ButtonTypes.Primary}
                buttonSize={ButtonSizes.Small}
                text={'DEBUG: Back'}
                onClickHandler={handleBack}
            />
        </SendingModeContainer>
    )
}

// gets potato state and displays the mode
// TODO: make this more elegant
export const PotatoInterface = () => {
    const [mode, setMode] = useState('PotatoMode')
    const userState = useContext(UserContext)
    const potatoResource = PotatoStateResource(userState) // get potato resource based on userstate
    const potatoState = potatoResource.state

    // parse potatoState into potatoInfo
    if (userState.instance) {
        if (userState.instance.hasPotato) {
            potatoInfo.potatoTitleText = 'You have a potato!'

            if (potatoState.id) {
                potatoInfo.id = potatoState.id
            }

            if (potatoState.timeCreated && potatoState.timeOfDeath) {
                const potatoTypeInfo = calculatePotatoType(
                    potatoState.timeCreated,
                    potatoState.timeOfDeath
                )
                potatoInfo.potatoType = potatoTypeInfo.potato
                potatoInfo.potatoSubTitleText = potatoTypeInfo.subText
            }
        }
    }

    return (
        <InterfaceContainer>
            <PotatoContext.Provider value={potatoInfo}>
                {potatoResource.isLoading && <div>Loading...</div>}
                {!potatoResource.isLoading && mode === 'PotatoMode' && (
                    <PotatoMode changeMode={setMode} />
                )}
                {!potatoResource.isLoading && mode === 'SendingMode' && (
                    <SendingMode changeMode={setMode} />
                )}
            </PotatoContext.Provider>
        </InterfaceContainer>
    )
}
