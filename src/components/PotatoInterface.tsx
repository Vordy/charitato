import { Button } from 'common/button/Button'
import { ButtonSizes, ButtonTypes } from 'common/button/ButtonUtils'
import { createPotato } from 'common/potato_lifecycle'
import { Potato, PotatoTypes } from 'assets/potatoes/potato'
import { UserContext } from 'pages/Dashboard'
import {
    BigText,
    CopyBox,
    CopyContainer,
    CopyMessage,
    Or,
    SendingModeContainer,
    DropdownContainer,
    DropdownBox,
    DropdownSelection
} from 'common/dashboard/sending_styles'
import { calculatePotatoType, PotatoStateResource } from 'common/potato_state'
import {
    InterfaceContainer,
    PotatoButton,
    PotatoContainer,
    PotatoModeContainer,
    PotatoSubTitleText,
    PotatoTitleText,
} from 'common/dashboard/potato_styles'
import copy from 'clipboard-copy'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { Loading } from 'pages/Loading'

// For passing in the page changer to the modes
interface ModeProps {
    changeMode: React.Dispatch<React.SetStateAction<string>>
}

// local info for potato
const defaultPotatoInfo = {
    id: '',
    potatoSubTitleText: '',
    potatoTitleText: '',
    potatoType: PotatoTypes.None,
}

// for passing down potato info into modes
const PotatoContext = createContext(defaultPotatoInfo)

// for viewing a potato (or lack thereof)
const PotatoMode = ({ changeMode }: ModeProps) => {
    const potatoContext = useContext(PotatoContext)
    const userState = useContext(UserContext)

    const isPotatoFresh =
        potatoContext.potatoType === PotatoTypes.Fresh ? true : false
    const isPotato =
        potatoContext.potatoType === PotatoTypes.None ? false : true

    const handleNewPotatoClick = () => {
        if (userState.instance) {
            if (!userState.instance.hasPotato) {
                createPotato(userState)
            }
        }
    }

    const handlePotatoInfoClick = () => {
        alert('PotatoInfo still in development, check back later!')
    }

    const handlePotatoClick = () => {
        if (!isPotatoFresh) {
            changeMode('SendingMode')
        }
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
            {isPotato && !isPotatoFresh && (
                <PotatoButton
                    style={{
                        gridArea: 'button1',
                        justifySelf: 'end',
                        opacity: '30%',
                    }}
                >
                    +
                </PotatoButton>
            )}
            {isPotato && isPotatoFresh && (
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
            {isPotato && isPotatoFresh && (
                <PotatoButton
                    style={{
                        gridArea: 'button2',
                        justifySelf: 'start',
                        opacity: '30%',
                    }}
                >
                    i
                </PotatoButton>
            )}
            {isPotato && !isPotatoFresh && (
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

    const handleSend = (event: React.MouseEvent) => {
        return null;
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
            <DropdownContainer>
                <DropdownBox><i>Select a friend...</i></DropdownBox>
                <Button
                    buttonType={ButtonTypes.Primary}
                    buttonSize={ButtonSizes.Small}
                    text={'Send'}
                    onClickHandler={handleSend}
                />
            </DropdownContainer>
            {/* <Button
                buttonType={ButtonTypes.Primary}
                buttonSize={ButtonSizes.Small}
                text={'DEBUG: Back'}
                onClickHandler={handleBack}
            /> */}
        </SendingModeContainer>
    )
}

// gets potato state and displays the mode
// TODO: make this more elegant
export const PotatoInterface = () => {
    const [mode, setMode] = useState('PotatoMode')
    const [potatoInfoState, setPotatoInfoState] = useState(defaultPotatoInfo)
    const userState = useContext(UserContext)
    const potatoResource = PotatoStateResource() // get potato resource based on userstate
    const potatoState = potatoResource.state

    const isLoading = () => {
        return potatoResource.isLoading
    }

    // parse potatoState into potatoInfo
    useEffect(() => {
        if (userState.instance) {
            if (userState.instance.hasPotato) {
                if (
                    potatoState.id &&
                    potatoState.timeCreated &&
                    potatoState.timeOfDeath
                ) {
                    const potatoTypeInfo = calculatePotatoType(
                        potatoState.timeCreated,
                        potatoState.timeOfDeath
                    )

                    const newValForPotato = {
                        id: potatoState.id,
                        potatoSubTitleText: potatoTypeInfo.subText,
                        potatoTitleText: 'You have a potato!',
                        potatoType: potatoTypeInfo.potato,
                    }

                    setPotatoInfoState(newValForPotato)
                }
            } else {
                const noPotatoInfo = {
                    id: '',
                    potatoSubTitleText: 'Bake one up for your friends!',
                    potatoTitleText: "You don't have a potato",
                    potatoType: PotatoTypes.Fresh,
                }
                setPotatoInfoState(noPotatoInfo)
            }
        }
    }, [potatoState, userState])

    return (
        <InterfaceContainer>
            <PotatoContext.Provider value={potatoInfoState}>
                {isLoading() && <Loading />}
                {!isLoading() && mode === 'PotatoMode' && (
                    <PotatoMode changeMode={setMode} />
                )}
                {!isLoading() && mode === 'SendingMode' && (
                    <SendingMode changeMode={setMode} />
                )}
            </PotatoContext.Provider>
        </InterfaceContainer>
    )
}
