import React, { createContext, useContext, useState } from 'react'
import { UserContext } from 'pages/Dashboard'
import styled from '@emotion/styled'
import { Potato, PotatoTypes } from 'assets/potatoes/potato'
import { Colors } from 'theme/Colors'
import {
    PotatoStateResource,
    calculatePotatoType,
    potatoInfo,
} from 'common/potato_state'
import { Button } from 'common/button/Button'
import { ButtonTypes, ButtonSizes } from 'common/button/ButtonUtils'

const InterfaceContainer = styled.div`
    font-family: 'Helvetica Nueue', roboto, Arial, Helvetica, sans-serif;
    height: 100%;
    width: 100%;
    text-align: center;
`

const MainContainer = styled.div`
    display: grid;
    height: 100%;
    width: 100%;

    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 20% 30% 10% 10% 10% 20%;

    grid-template-areas:
        '. . .'
        '. potato .'
        '. text .'
        '. subtext .'
        '. buttons .'
        '. . .';

    place-items: center center;
`

const PotatoTitleText = styled.p`
    font-weight: bold;
    grid-area: text;
`

const PotatoSubTitleText = styled.p`
    margin: 0px;
    grid-area: subtext;
`

const PotatoButtonContainer = styled.div`
    margin-top: 40px;
    grid-area: buttons;
    background-color: pink;
`

const PotatoButton = styled.div`
    font-size: xx-large;
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
        <MainContainer>
            <Potato
                style={{
                    alignSelf: 'center',
                    cursor: 'pointer',
                    gridArea: 'potato',
                }}
                type={potatoContext.potatoType}
            />
            <PotatoTitleText>{potatoContext.potatoTitleText}</PotatoTitleText>
            <PotatoSubTitleText>
                {potatoContext.potatoSubTitleText}
            </PotatoSubTitleText>
            <PotatoButtonContainer>
                {potatoButtonGrayedOut && (
                    <PotatoButton style={{ opacity: '30%' }}>+</PotatoButton>
                )}
                {!potatoButtonGrayedOut && (
                    <PotatoButton
                        style={{ cursor: 'pointer' }}
                        onClick={handleNewPotatoClick}
                    >
                        +
                    </PotatoButton>
                )}
                {potatoButtonGrayedOut && (
                    <PotatoButton style={{ opacity: '30%' }}>i</PotatoButton>
                )}
                {!potatoButtonGrayedOut && (
                    <PotatoButton
                        style={{ cursor: 'pointer' }}
                        onClick={handlePotatoInfoClick}
                    >
                        i
                    </PotatoButton>
                )}
            </PotatoButtonContainer>
        </MainContainer>
    )
}

const BigText = styled.p`
    font-size: 4vw;
    text-align: center;
`

const SendContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const CopyContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const CopyBox = styled.div`
    background-color: ${Colors.LightGray};
    border-radius: 999px;
`

const SendingMode = ({ changeMode }: ModeProps) => {
    const potatoContext = useContext(PotatoContext)
    const url = window.location.host + '/rec/' + potatoContext.id

    const handleCopy = (event: React.MouseEvent) => {
        changeMode('PotatoMode') //temp
    }

    return (
        <MainContainer>
            <BigText>Send the charitato before it explodes!</BigText>
            <SendContainer>
                <CopyContainer>
                    <CopyBox>{url}</CopyBox>
                    <Button
                        buttonType={ButtonTypes.Primary}
                        buttonSize={ButtonSizes.Small}
                        text={'Copy'}
                        onClickHandler={handleCopy}
                    />
                </CopyContainer>
            </SendContainer>
        </MainContainer>
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
