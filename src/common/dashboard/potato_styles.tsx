import styled from '@emotion/styled'
import { Colors } from 'theme/Colors'
import { getTheme } from 'theme/themes'

// Used for Potato Interface (PotatoMode)
// ------------------------------------------------------------------------
export const InterfaceContainer = styled.div`
    /* Colors */
    background-color: ${getTheme().background};
    color: ${getTheme().foreground};

    /* Font */
    font-family: 'Helvetica Nueue', roboto, Arial, Helvetica, sans-serif;
    font-size: 0.9vw;
    text-align: center;

    /* Size */
    height: 100%;
    width: 100%;
`

export const PotatoModeContainer = styled.div`
    /* Size */
    height: 100%;
    width: 100%;

    /* Layout */
    display: grid;
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
    /* Layout */
    grid-area: text;

    /* Font */
    font-weight: bold;
    font-size: 2.5vw;
    font-weight: bold;
`

export const PotatoSubTitleText = styled.div`
    /* Layout */
    grid-area: subtext;
    margin: 0px;

    /* Font */
    font-size: 2.5vw;
`

export const PotatoButton = styled.div`
    /* Size */
    width: 40px;
    height: 40px;

    /* Font */
    font-size: xx-large;
    color: ${Colors.White};

    /* Appearance */
    background-color: #c4c4c4;
    box-shadow: 4px 4px 18px rgba(0, 0, 0, 0.08);
    border-radius: 999px;

    /* Layout */
    margin-right: 10px;
    margin-left: 10px;
    display: grid;
    place-items: center center;
`

// for clicking
export const PotatoContainer = styled.div`
    /* Layout */
    grid-area: splash;

    /* Appearance */
    cursor: pointer;
`
