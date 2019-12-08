import { Button } from 'common/button/Button'
import { ButtonSizes, ButtonTypes } from 'common/button/ButtonUtils'
import { getTheme } from 'theme/themes'
import { Homeblob } from 'assets/blobs/Homeblob'
import { localize } from 'assets/strings/localize'
import { useHistory } from 'react-router'
import React from 'react'
import styled from '@emotion/styled'

// const HomeContainer = styled.div`
//     width: 100%;
//     height: 100%;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     display: flex;
//     color: ${getTheme().foreground};
//     background-color: ${getTheme().background};
//     font-family: 'Helvetica Nueue', roboto, Arial, Helvetica, sans-serif;
// `

const SplashHeader = styled.div`
    font-size: 5em;
    font-weight: 700;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex;
    padding-right: 30%;
    padding-top: 100px;
    height: 100%;
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

const ArrowDownLower = styled.div`
    border: black 1px solid;
    margin-top: -32px;
    width: 60px;
    height: 60px;
    box-sizing: border-box;
    transform: rotate(45deg);
    border-top: none;
    border-left: none;
`
const ArrowDownUpper = styled.div`
    border: black 1px solid;
    width: 60px;
    height: 60px;
    box-sizing: border-box;
    transform: rotate(45deg);
    border-top: none;
    border-left: none;
`

const ArrowContainer = styled.div`
    position: absolute;
    bottom: 50px;
    right: 50%;
    cursor: pointer;
    transition: bottom 0.25s ease-in-out;
    &:hover {
        div:nth-child(1) {
            transform: translateY(20px) rotate(45deg);
            transition: transform 0.7s ease-in-out;
        }
        div:nth-child(2) {
            transform: translateY(20px) rotate(45deg);
            transition: transform 0.5s ease-in-out;
        }
    }
    div {
        transition: transform 0.5s ease-in-out;
    }
`

const InstructionContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const InstructionHeader = styled.div`
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    text-align: center;
    font-family: 'Helvetica Nueue', roboto, Arial, Helvetica, sans-serif;
`
const InstructionComment = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    text-align: center;
    font-family: 'Helvetica Nueue', roboto, Arial, Helvetica, sans-serif;
`

export const Home = () => {
    const history = useHistory()
    const scrollRef = React.useRef<HTMLDivElement>(null)

    const onClickEvent = (event: React.MouseEvent) => {
        history.push('/dashboard')
    }

    const scrollDownClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (scrollRef.current) {
            const scrollPosition = scrollRef.current.offsetTop
            window.scrollTo({ top: scrollPosition, behavior: 'smooth' })
        }
    }

    return (
        <>
            {/* <HomeContainer> */}
            <SplashHeader>
                <BoldText>
                    {localize('char.home.splash.mainText')} <br />
                    <SubText>{localize('char.home.splash.subText')}</SubText>
                </BoldText>

                <Button
                    buttonType={ButtonTypes.Primary}
                    buttonSize={ButtonSizes.Large}
                    text={localize('char.home.splash.button.sendAPotato')}
                    onClickHandler={onClickEvent}
                />
                <ArrowContainer onClick={scrollDownClick}>
                    <ArrowDownUpper />
                    <ArrowDownLower />
                </ArrowContainer>
            </SplashHeader>
            <InstructionContainer ref={scrollRef}>
                <InstructionHeader>How does it work?</InstructionHeader>
                <InstructionComment>We're glad you asked...</InstructionComment>
            </InstructionContainer>
            {/* </HomeContainer> */}
            <Homeblob
                style={{
                    position: 'absolute',
                    top: '-30%',
                    right: '-20%',
                }}
            />
        </>
    )
}
