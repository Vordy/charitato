import { Button } from 'common/button/Button'
import { ButtonSizes, ButtonTypes } from 'common/button/ButtonUtils'
import { getTheme } from 'theme/themes'
import { Homeblob } from 'assets/blobs/Homeblob'
import { localize } from 'assets/strings/localize'
import { useHistory } from 'react-router'
import React from 'react'
import styled from '@emotion/styled'

const HomeContainer = styled.div`
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex;
    color: ${getTheme().foreground};
    background-color: ${getTheme().background};
    font-family: 'Helvetica Nueue', roboto, Arial, Helvetica, sans-serif;
`

const SplashHeader = styled.div`
    font-size: 5em;
    font-weight: 700;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex;
    padding-right: 30%;
    padding-top: 100px;
`

const BoldText = styled.div`
    font-family: 'Helvetica Nueue', roboto, Arial, Helvetica, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 56px;
    line-height: 34px;
    text-align: center;
    padding-bottom: 16px;
`

const SubText = styled.div`
    font-family: 'Helvetica Nueue', roboto, Arial, Helvetica, sans-serif;
    font-style: normal;
    font-weight: 100;
    font-size: 56px;
    line-height: 84px;
`

export const Home = () => {
    const history = useHistory()

    const onClickEvent = (event: React.MouseEvent) => {
        history.push('/dashboard')
    }

    return (
        <>
            <HomeContainer>
                <SplashHeader>
                    <BoldText>
                        {localize('char.home.splash.mainText')} <br />
                        <SubText>
                            {localize('char.home.splash.subText')}
                        </SubText>
                    </BoldText>

                    <Button
                        buttonType={ButtonTypes.Primary}
                        buttonSize={ButtonSizes.Large}
                        text={localize('char.home.spash.button.sendAPotato')}
                        onClickHandler={onClickEvent}
                    />
                </SplashHeader>
            </HomeContainer>
            <Homeblob
                style={{ position: 'absolute', top: '-5%', right: '0%' }}
            />
        </>
    )
}
