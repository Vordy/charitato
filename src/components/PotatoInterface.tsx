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
    font-weight: normal;
`

const PotatoSubTitleText = styled.p`
    margin: 0px;
    font-size: 2.5vw;
`

const PotatoButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 20px;
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

export const PotatoInterface = () => {
    const userState = useContext(UserContext)
    const [hasPotato, setHasPotato] = useState(false)

    useEffect(() => {
        if (userState.instance) {
            setHasPotato(userState.instance.hasPotato)
        }
    }, [userState.instance]) // only recalls useEffect if the user instance changes

    return (
        <InterfaceContainer>
            <PotatoContainer>
                <Potato
                    style={{ alignSelf: 'center', cursor: 'pointer' }}
                    type={PotatoTypes.Hot}
                />
                <PotatoTitleText>You have a potato!</PotatoTitleText>
                <PotatoSubTitleText>It's Super Hot!</PotatoSubTitleText>
                <PotatoButtonContainer>
                    <PotatoButton>+</PotatoButton>
                    <PotatoButton>i</PotatoButton>
                </PotatoButtonContainer>
            </PotatoContainer>
        </InterfaceContainer>
    )
}
