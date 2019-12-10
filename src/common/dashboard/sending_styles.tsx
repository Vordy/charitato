import styled from '@emotion/styled'
import { Colors } from 'theme/Colors'

// Used for PotatoInterface (sending mode)
// ------------------------------------------------------------------------
export const SendingModeContainer = styled.div`
    display: grid;
    height: 100%;
    width: 100%;

    grid-template-columns: 2fr 1fr 1fr 2fr;
    grid-template-rows: 20% 20% 10% 5% 5% 10% 30%;

    grid-template-areas:
        '. . . .'
        'splash splash splash splash'
        '. text text .'
        '. or or .'
        '. . . .'
        '. dropdown dropdown .'
        '. . . .';

    place-items: center center;
`

export const BigText = styled.div`
    font-size: 4vw;
    text-align: center;
    grid-area: splash;
`

export const CopyContainer = styled.div`
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

export const CopyBox = styled.div`
    display: grid;
    height: 100%;
    width: 100%;
    padding-right: 5px;
    padding-left: 5px;
    place-items: center center;
    background-color: ${Colors.LightGray};
    border-radius: 999px;
`

export const CopyMessage = styled.div`
    grid-area: copied;
    color: green;
    font-weight: bold;
`

export const Or = styled.div`
    width: 50%;

    display: grid;
    grid-area: or;

    grid-template-columns: 3fr 2fr 3fr;
    grid-template-rows: auto;

    font-weight: bold;
`

export const DropdownContainer = styled.div`
    grid-area: dropdown;
    display: grid;
    height: 100%;

    grid-template-columns: 4fr 1fr;
    grid-template-rows: auto 1fr;

    grid-column-gap: 20px;

    grid-template-areas:
        'dropdownbox button'
        '. .';

    place-items: center center;
`;

export const DropdownBox = styled.div`
    display: grid;
    height: 100%;
    width: 100%;
    padding-right: 5px;
    padding-left: 5px;
    place-items: center center;
    background-color: ${Colors.LightGray};
    border-color: ${Colors.DarkGray};
    border-style: solid;
    border-radius: 999px;
`;

export const DropdownSelection = styled.div`
    width: 100%;
    background-color: ${Colors.LightGray};
`;
