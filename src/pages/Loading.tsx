import { localize } from 'assets/strings/localize'
import React from 'react'
import styled from '@emotion/styled'
import { getTheme } from 'theme/themes'

const LoadingInterface = styled.div`
    /* Colors */
    background-color: ${getTheme().background};
    color: ${getTheme().foreground};

    /* Size */
    width: 100%;
    height: 100%;

    /* Layout */
    display: grid;
    place-items: center center;
`

const LoadingText = styled.div`
    font-weight: bold;
    font-size: 1.5vw;
`

export const Loading = () => {
    return (
        <LoadingInterface>
            <LoadingText>{localize('char.dashboard.loading.text')}</LoadingText>
        </LoadingInterface>
    )
}
