import { Button } from 'common/button/Button'
import { ButtonSizes, ButtonTypes } from 'common/button/ButtonUtils'
import { getTheme } from 'theme/themes'
import { Homeblob } from 'assets/blobs/Homeblob'
import { useHistory } from 'react-router'
import { useParams } from 'react-router'
import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { getPotatoInfo } from 'components/PotatoActions'

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

const defaultPotato = {
    lastHolder: {
        userID: '',
        name: '',
    },
    userHistory: [
        {
            userID: '',
            name: '',
        },
    ],
}

export const RecPotato = () => {
    const { potatoID } = useParams()
    const [potatoState, setPotatoState] = useState(defaultPotato)
    const history = useHistory()

    const getPotatoInstance = async () => {
        if (potatoID === undefined) {
            return
        }

        const potato = await getPotatoInfo(potatoID)

        if (potato === null) {
            history.push('/')
            return
        }

        setPotatoState(potato)
    }

    useEffect(() => {
        getPotatoInstance()
    }, [])

    return (
        <>
            <HomeContainer>
                <SplashHeader>
                    <BoldText>
                        {potatoState.lastHolder.name} sent you a charitato!{' '}
                        <br />
                        <SubText>Send it to one of your friends!</SubText>
                    </BoldText>

                    <Button
                        buttonType={ButtonTypes.Primary}
                        buttonSize={ButtonSizes.Large}
                        text={'Send it'}
                        onClickHandler={(e: React.MouseEvent) => {
                            history.push('/dashboard')
                        }}
                    />
                </SplashHeader>
            </HomeContainer>
            <Homeblob
                style={{ position: 'absolute', top: '-5%', right: '0%' }}
            />
        </>
    )
}
