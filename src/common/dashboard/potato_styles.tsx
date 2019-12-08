import styled from '@emotion/styled'
import { Colors } from 'theme/Colors'

// Used for Potato Interface (PotatoMode), Incoming Potato Interface
// ------------------------------------------------------------------------
export const InterfaceContainer = styled.div`
    font-family: 'Helvetica Nueue', roboto, Arial, Helvetica, sans-serif;
    font-size: 0.9vw;
    height: 100%;
    width: 100%;
    text-align: center;
`

export const PotatoModeContainer = styled.div`
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

export const PotatoTitleText = styled.div`
    font-weight: bold;
    grid-area: text;
    font-size: 3vw;
    font-weight: bold;
`

export const PotatoSubTitleText = styled.div`
    margin: 0px;
    grid-area: subtext;
    font-size: 2.5vw;
`

export const PotatoButton = styled.div`
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
