import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from 'pages/Dashboard'
import styled from '@emotion/styled'
import { Potato, PotatoTypes } from 'assets/potatoes/potato'
import { Colors } from 'theme/Colors'

const InterfaceContainer = styled.div`
    font-family: 'Helvetica Nueue', roboto, Arial, Helvetica, sans-serif;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    text-align: center;
`

const PotatoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
`

const PotatoTitleText = styled.p`
    margin: 0px;
    margin-top: 20px;
    font-size: 3vw;
    font-weight: bold;
`

const PotatoSubTitleText = styled.p`
    margin: 0px;
    font-size: 2.5vw;
`

const PotatoButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 40px;
`

const PotatoButton = styled.div`
    cursor: pointer;
    margin-left: 10px;
    margin-right: 10px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 50px;
    width: 50px;
    font-size: xx-large;
    border-radius: 999px;
    color: ${Colors.White};
    background-color: #c4c4c4;
    box-shadow: 4px 4px 18px rgba(0, 0, 0, 0.08);
`

interface PotatoModeProps {
    changeMode: React.Dispatch<React.SetStateAction<string>>
}

const PotatoMode = ({ changeMode }: PotatoModeProps) => {
    const userState = useContext(UserContext)
    const [hasPotato, setHasPotato] = useState(false)

    const potatoInfo = {
        potatoType: PotatoTypes.Fresh,
        potatoTitleText: "You don't have a potato",
        potatoSubTitleText: 'Bake one up for your friends!',
    }

    if (userState.instance) {
        if (userState.instance.hasPotato) {
            // TODO: Implement potato info fetching from Instance
            potatoInfo.potatoTitleText = 'You have a potato!'
            potatoInfo.potatoType = PotatoTypes.KindaMedium
            potatoInfo.potatoSubTitleText = "It's kinda medium-ish"
        }
    }

    useEffect(() => {
        if (userState.instance) {
            setHasPotato(userState.instance.hasPotato)
        }
    }, [userState.instance]) // only recalls useEffect if the user instance changes

    const handleNewPotatoClick = () => {
        // changeMode('TESTMODE')
    }

    return (
        <PotatoContainer>
            <Potato
                style={{ alignSelf: 'center', cursor: 'pointer' }}
                type={potatoInfo.potatoType}
            />
            <PotatoTitleText>{potatoInfo.potatoTitleText}</PotatoTitleText>
            <PotatoSubTitleText>
                {potatoInfo.potatoSubTitleText}
            </PotatoSubTitleText>
            <PotatoButtonContainer>
                <PotatoButton onClick={handleNewPotatoClick}>+</PotatoButton>
                <PotatoButton>i</PotatoButton>
            </PotatoButtonContainer>
        </PotatoContainer>
    )
}

export const PotatoInterface = () => {
    const [mode, setMode] = useState('PotatoMode')

    return (
        <InterfaceContainer>
            {mode === 'PotatoMode' && <PotatoMode changeMode={setMode} />}
        </InterfaceContainer>
    )
}
