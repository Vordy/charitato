import React from 'react'
import styled from '@emotion/styled'
import { localize } from 'assets/strings/localize'

const Page = styled.div`
    font-family: Helvetica Nueue, roboto, Arial, Helvetica, sans-serif;
    font-size: 4vw;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    font-weight: bold;
`

export const PageNotFound = () => {
    return (
        <Page>
            <span role="img" aria-label={'sad'}>
                {localize('char.pagenotfound.main.text')}
            </span>
        </Page>
    )
}
