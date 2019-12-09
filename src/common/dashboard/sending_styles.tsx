import styled from '@emotion/styled'
import { Colors } from 'theme/Colors'

// Used for PotatoInterface (sending mode)
// ------------------------------------------------------------------------
export const SendingModeContainer = styled.div`
    /* Size */
    height: 100%;
    width: 100%;

    /* Layout */
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 2fr;
    grid-template-rows: 20% 30% 10% 10% 10% 20%;
    grid-template-areas:
        '. . . .'
        'splash splash splash splash'
        '. text text .'
        '. or or .'
        '. button1 button2 .'
        '. . . .';
    place-items: center center;
`

export const BigText = styled.div`
    /* Layout */
    grid-area: splash;

    /* Font */
    font-size: 4vw;
    text-align: center;
`

export const CopyContainer = styled.div`
    /* Size */
    height: 100%;

    /* Layout */
    grid-area: text;
    display: grid;
    grid-template-columns: 4fr 1fr;
    grid-template-rows: auto 1fr;
    grid-column-gap: 20px;
    grid-template-areas:
        'url button'
        'copied copied';
    place-items: center center;
`

export const CopyBox = styled.div`
    /* Size */
    height: 100%;
    width: 100%;
    padding-right: 5px;
    padding-left: 5px;

    /* Appearance */
    background-color: ${Colors.LightGray};
    border-radius: 999px;

    /* Layout */
    display: grid;
    place-items: center center;
`

export const CopyMessage = styled.div`
    /* Layout */
    grid-area: copied;

    /* Appearance */
    color: green;

    /* Font */
    font-weight: bold;
`

export const Or = styled.div`
    /* Size */
    width: 50%;

    /* Layout */
    display: grid;
    grid-area: or;
    grid-template-columns: 3fr 2fr 3fr;
    grid-template-rows: auto;

    /* Font */
    font-weight: bold;
`
