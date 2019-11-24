import React from 'react'
import styled from '@emotion/styled'

import { Colors } from 'theme/Colors'

import { Button } from 'common/button/Button'
import { ButtonSizes, ButtonTypes } from 'common/button/ButtonUtils'
import { Homeblob } from 'assets/blobs/Homeblob'
import { useHistory } from 'react-router'

const HomeContainer = styled.div`
    background-color: yellow;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    display: flex;
    color: ${Colors.RichDark};
    background-color: ${Colors.White};
    font-family: 'Helvetica Nueue', roboto, Arial, Helvetica, sans-serif;
`

const SplashHeader = styled.div`
    background-color: black;
    font-size: 5em;
    font-weight: 700;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex;
    padding-left: 32px;
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

    return (
        <>
            <HomeContainer>
                <SplashHeader>
                    <BoldText>
                        Let’s make the world better <br />
                        <SubText>one potato at a time</SubText>
                    </BoldText>

                    <Button
                        buttonType={ButtonTypes.Primary}
                        buttonSize={ButtonSizes.Large}
                        text={'Send a potato'}
                        onClickHandler={(e: React.MouseEvent) => {
                            history.push('/dashboard')
                        }}
                    />
                </SplashHeader>
            </HomeContainer>
            <Homeblob
                style={{ position: 'absolute', top: '-10px', right: '-10px' }}
            />
        </>
    )
}
