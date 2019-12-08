import { Button } from 'common/button/Button'
import { ButtonTypes, ButtonSizes } from 'common/button/ButtonUtils'
import { Colors } from 'theme/Colors'
import { Potato, PotatoTypes } from 'assets/potatoes/potato'
import { UserContext } from 'pages/Dashboard'
import {
    calculatePotatoType,
    potatoInfo,
    PotatoStateResource,
} from 'common/potato_state'
import copy from 'clipboard-copy'
import React, { createContext, useContext, useState } from 'react'
import styled from '@emotion/styled'

const InterfaceContainer = styled.div`
    font-family: 'Helvetica Nueue', roboto, Arial, Helvetica, sans-serif;
    height: 100%;
    width: 100%;
    text-align: center;
`

const PotatoModeContainer = styled.div`
    display: grid;
    height: 100%;
    width: 100%;

    grid-template-columns: 2fr 1fr 1fr 2fr;
    grid-template-rows: 20% 30% 10% 10% 10% 20%;

    grid-template-areas:
        '. . . .'
        '. splash splash .'
        '. text text .'
        '. subtext subtext .'
        '. button1 button2 .'
        '. . . .';

    place-items: center center;
`

const PotatoTitleText = styled.div`
    font-weight: bold;
    grid-area: text;
    font-size: 3vw;
    font-weight: bold;
`

const PotatoSubTitleText = styled.div`
    margin: 0px;
    grid-area: subtext;
    font-size: 2.5vw;
`

const PotatoButton = styled.div`
    width: 40px;
    height: 40px;
    font-size: xx-large;
    margin-right: 10px;
    margin-left: 10px;
    border-radius: 999px;
    color: ${Colors.White};
    background-color: #c4c4c4;
    box-shadow: 4px 4px 18px rgba(0, 0, 0, 0.08);
`

// For passing in the page changer to the modes
interface ModeProps {
    changeMode: React.Dispatch<React.SetStateAction<string>>
}

// for passing down potato info into modes
const PotatoContext = createContext(potatoInfo)

// for viewing a potato (or lack thereof)
const PotatoMode = ({ changeMode }: ModeProps) => {
    const potatoContext = useContext(PotatoContext)
    let potatoButtonGrayedOut = false

    if (potatoContext.potatoType === PotatoTypes.Fresh) {
        potatoButtonGrayedOut = true
    }

    const handleNewPotatoClick = () => {
        changeMode('SendingMode')
    }

    const handlePotatoInfoClick = () => {
        alert('TODO: Potato Info Mode')
    }

    return (
        <PotatoModeContainer>
            <Potato
                style={{
                    alignSelf: 'center',
                    cursor: 'pointer',
                    gridArea: 'splash',
                }}
                type={potatoContext.potatoType}
            />
            <PotatoTitleText>{potatoContext.potatoTitleText}</PotatoTitleText>
            <PotatoSubTitleText>
                {potatoContext.potatoSubTitleText}
            </PotatoSubTitleText>
            {potatoButtonGrayedOut && (
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
            {!potatoButtonGrayedOut && (
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
            {potatoButtonGrayedOut && (
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
            {!potatoButtonGrayedOut && (
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

const SendingModeContainer = styled.div`
    display: grid;
    height: 100%;
    width: 100%;

    grid-template-columns: 2fr 1fr 1fr 2fr;
    grid-template-rows: 20% 30% 10% 10% 10% 20%;

    grid-template-areas:
        '. . . .'
        'splash splash splash splash'
        '. text text .'
        '. subtext subtext .'
        '. button1 button2 .'
        '. . . .';

    place-items: center center;
`

const BigText = styled.div`
    font-size: 4vw;
    text-align: center;
    grid-area: splash;
`

const CopyContainer = styled.div`
    grid-area: text;
    display: grid;
    height: 100%;

    grid-template-columns: 4fr 1fr;
    grid-template-rows: auto 1fr;

    grid-column-gap: 20px;

    grid-template-areas:
        'url button'
        'copied copied';

    place-items: center center;
`

const CopyBox = styled.div`
    display: grid;
    height: 100%;
    width: 100%;
    padding-right: 5px;
    padding-left: 5px;
    place-items: center center;
    background-color: ${Colors.LightGray};
    border-radius: 999px;
`

const CopyMessage = styled.div`
    grid-area: copied;
    color: green;
    font-weight: bold;
`

const SendingMode = ({ changeMode }: ModeProps) => {
    const potatoContext = useContext(PotatoContext)
    const [copied, setCopied] = useState(false)
    const url = window.location.host + '/rec/' + potatoContext.id

    const handleCopy = (event: React.MouseEvent) => {
        copy(url)
        setCopied(true)
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
        </SendingModeContainer>
    )
}

// gets potato state and displays the mode
// TODO: make this more elegant
export const PotatoInterface = () => {
    const [mode, setMode] = useState('SendingMode')
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
