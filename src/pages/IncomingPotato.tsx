import React from 'react'
import styled from '@emotion/styled'

const InterfaceContainer = styled.div`
    font-family: 'Helvetica Nueue', roboto, Arial, Helvetica, sans-serif;
    font-size: 0.9vw;
    height: 100%;
    width: 100%;
    text-align: center;
`

const MainContainer = styled.div`
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

export const IncPotato = () => {
    return (
        <InterfaceContainer>
            <MainContainer>You got potatoID: </MainContainer>
        </InterfaceContainer>
    )
}
