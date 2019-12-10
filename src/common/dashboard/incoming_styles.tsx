import styled from '@emotion/styled'

// Used for the IncomingPotato component message pages

export const ContinueButton = styled.div`
    /* size */
    width: 100%;

    /* placement */
    grid-column-start: button1;
    grid-column-end: button2;
    grid-row-start: button1;
    grid-row-end: button2;

    /* center button */
    display: grid;
    place-items: center center;
`

export const LoadingContainer = styled.div`
    width: 100%;
    height: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
`
