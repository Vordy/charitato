import { Button } from 'common/button/Button'
import { ButtonSizes, ButtonTypes } from 'common/button/ButtonUtils'
import { Colors } from 'theme/Colors'
import { getTheme } from 'theme/themes'
import { Homeblob } from 'assets/blobs/Homeblob'
import { localize } from 'assets/strings/localize'
import { useHistory } from 'react-router'
import React from 'react'
import styled from '@emotion/styled'
import { Potato, PotatoTypes } from 'assets/potatoes/potato'
import { Footerblob } from 'assets/blobs/Footerblob'

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
        div:nth-of-type(1) {
            transform: translateY(20px) rotate(45deg);
            transition: transform 0.7s ease-in-out;
        }
        div:nth-of-type(2) {
            transform: translateY(20px) rotate(45deg);
            transition: transform 0.5s ease-in-out;
        }
    }
    div {
        transition: transform 0.5s ease-in-out;
    }
`

const InstructionsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 15%;
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

const Instruction = styled.div`
    margin: 24px;
    width: 70%;
    display: grid;
    grid-template-columns: 25% 3% auto;
`
const InstructionCircle = styled.div<InstructionCircleProps>`
    width: 180px;
    height: 180px;
    left: 314px;
    top: 1449px;
    border-radius: 999px;

    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 1;
    grid-row-end: 1;

    background: ${InstructionCircleProps => InstructionCircleProps.gradient};
    box-shadow: inset 0px 0px 40px rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    span {
        font-style: normal;
        font-weight: normal;
        font-size: 100px;
        line-height: 169px;

        text-align: center;

        color: ${Colors.White};
        font-family: 'Helvetica Nueue', roboto, Arial, Helvetica, sans-serif;
    }
`

const InstructionText = styled.div`
    font-family: 'Helvetica Nueue', roboto, Arial, Helvetica, sans-serif;
    text-align: left;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 32px;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    grid-column-start: 3;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 1;
`

interface InstructionCircleProps {
    gradient: string
}

const gatherInstructionInformation = (
    instructionNumber: 1 | 2 | 3 | 4
): { text: string; background: string } => {
    switch (instructionNumber) {
        case 1: {
            return {
                text:
                    'You (yes, you <3) create a Charity Hot Potato, or as we like to call it, a Charitato',
                background:
                    'linear-gradient(205.45deg, #ff0099 -137.05%, rgba(255, 230, 0, 0.7) 336.62%)',
            }
        }
        case 2: {
            return {
                text:
                    'You pick the amount that you want the Charitato to cost and the time until it explodes',
                background:
                    'linear-gradient(205.05deg, #FF0099 -220.84%, rgba(255, 230, 0, 0.7) 275.91%)',
            }
        }
        case 3: {
            return {
                text: 'Send your freshly baked Charitato to anyone you want ',
                background:
                    'linear-gradient(205.45deg, #FF0099 -299.66%, rgba(255, 230, 0, 0.7) 196.4%)',
            }
        }
        case 4: {
            return {
                text:
                    'Anyone sent a Charitato can pass it along until it explodes',
                background:
                    'linear-gradient(205.45deg, #FF0099 -382.43%, rgba(255, 230, 0, 0.7) 163.12%)',
            }
        }
    }
}

interface SpecificInstructionProps {
    instructionNumber: 1 | 2 | 3 | 4
}
const SpecificInstruction = ({
    instructionNumber,
}: SpecificInstructionProps) => {
    const InstructionInformation = gatherInstructionInformation(
        instructionNumber
    )

    return (
        <Instruction>
            <InstructionCircle gradient={InstructionInformation.background}>
                <span>{instructionNumber}</span>
            </InstructionCircle>
            <InstructionText>{InstructionInformation.text}</InstructionText>
        </Instruction>
    )
}

const ExplodeInstructionsHeader = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    text-align: center;
    font-family: 'Helvetica Nueue', roboto, Arial, Helvetica, sans-serif;
`

const ExplodeInstructionsBody = styled.div`
    width: 70%;
    display: grid;
    grid-template-columns: 25% 3% auto;
`

const ExplodeInstructionsBodyImage = styled.div`
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 1;
    grid-row-end: 1;
`
const ExplodeInstructionBodyText = styled.div`
    grid-column-start: 3;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 1;

    font-family: 'Helvetica Nueue', roboto, Arial, Helvetica, sans-serif;
    text-align: left;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 32px;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`

const ExplodeInstructionsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 64px;
`

const ExplodeInstructions = () => {
    return (
        <ExplodeInstructionsContainer>
            <ExplodeInstructionsHeader>
                What happens when my Charitato explodes?
                <span role="img" aria-label="explosion">
                    💥
                </span>
            </ExplodeInstructionsHeader>
            <ExplodeInstructionsBody>
                <ExplodeInstructionsBodyImage>
                    <Potato type={PotatoTypes.SuperHot} />
                </ExplodeInstructionsBodyImage>
                <ExplodeInstructionBodyText>
                    Whoever has the Charitato when it explodes can donate the
                    cost of the Charitato to any charity they choose (You don’t
                    have to donate if you don’t want to)
                </ExplodeInstructionBodyText>
            </ExplodeInstructionsBody>
        </ExplodeInstructionsContainer>
    )
}

// -----
const ImpactContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 64px;
`

const ImpactText = styled.div`
    font-family: 'Helvetica Nueue', roboto, Arial, Helvetica, sans-serif;
    text-align: center;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 32px;
`

const BigImpactNumber = styled.div`
    font-family: 'Helvetica Nueue', roboto, Arial, Helvetica, sans-serif;
    text-align: center;
    font-style: normal;
    font-weight: bold;
    font-size: 176px;
    /* line-height: 32px; */
    color: ${Colors.Rose};
`

const ImpactPercent = () => {
    return (
        <ImpactContainer>
            <ImpactText>Oh also,</ImpactText>
            <BigImpactNumber>100%</BigImpactNumber>
            <ImpactText>
                of your donation goes to the charity you choose.
            </ImpactText>
        </ImpactContainer>
    )
}

// ----
const ImpactStatementText = styled.div`
    font-family: 'Helvetica Nueue', roboto, Arial, Helvetica, sans-serif;
    text-align: center;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    /* line-height: 32px; */
    width: 32%;
    span {
        font-weight: normal;
    }
`

const ImpactStatementContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
`

const ImpactStatement = () => {
    return (
        <ImpactStatementContainer>
            <ImpactStatementText>
                You say <span>potato,</span> we say
                <span> let’s change the world.</span>
            </ImpactStatementText>
            {/* <Button
                buttonType={ButtonTypes.Primary}
                buttonSize={ButtonSizes.Large}
                text={localize('char.home.splash.button.sendAPotato')}
                onClickHandler={onClickEvent}
            /> */}
        </ImpactStatementContainer>
    )
}

// -----

const FooterBlobContainer = styled.div`
    width: 100%;
    height: 400px;
    margin-top: 128px;
    background: linear-gradient(
        178.48deg,
        #ff0099 -91.09%,
        rgba(255, 230, 0, 0.7) 159.94%
    );
    box-shadow: inset 0px 0px 80px rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`
const FooterNavGrid = styled.div`
    display: grid;
    width: 60%;
    grid-template-columns: 25% 25% 25% 25%;
    grid-template-rows: 100%;
`

const FooterNavItem = styled.div<FooterNavItemProps>`
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    font-family: 'Helvetica Nueue', roboto, Arial, Helvetica, sans-serif;
    text-align: center;
    color: ${Colors.White};
    cursor: pointer;
    grid-column-start: ${FooterNavItemProps =>
        FooterNavItemProps.itemNumber + 1};
    grid-column-end: ${FooterNavItemProps => FooterNavItemProps.itemNumber + 1};
    grid-row-start: 1;
    grid-row-end: 1;
    opacity: 0.7;
    transition: opacity 0.2s ease;
    &:hover {
        opacity: 1;
        transition: opacity 0.5s ease;
    }
`

const Copywrite = styled.div`
    color: ${Colors.White};
    font-size: 24px;
    margin-top: 24px;
    font-family: 'Helvetica Nueue', roboto, Arial, Helvetica, sans-serif;
    font-weight: 100;
    #medium {
        font-weight: 700;
    }
`
interface FooterNavItemProps {
    itemNumber: number
}

export const Footer = () => {
    const navItems = ['Home', 'Dashboard', 'Partners', 'Milestones']
    return (
        <FooterBlobContainer>
            <Potato
                type={PotatoTypes.PureWhite}
                style={{ height: '40%', width: 'auto' }}
            />
            <FooterNavGrid>
                {navItems.map((item, index) => {
                    return (
                        <FooterNavItem key={index} itemNumber={index}>
                            {item}
                        </FooterNavItem>
                    )
                })}
            </FooterNavGrid>
            <Copywrite>
                ©2019<span id="medium"> Charito</span>
            </Copywrite>
        </FooterBlobContainer>
    )
}

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
            <InstructionsContainer ref={scrollRef}>
                <InstructionHeader>How does it work?</InstructionHeader>
                <InstructionComment>We're glad you asked...</InstructionComment>
                <SpecificInstruction instructionNumber={1} />
                <SpecificInstruction instructionNumber={2} />
                <SpecificInstruction instructionNumber={3} />
                <SpecificInstruction instructionNumber={4} />
            </InstructionsContainer>
            <ExplodeInstructions />
            <ImpactPercent />
            <ImpactStatement />
            <Footer />
            {/* </HomeContainer> */}
            <Homeblob
                style={{
                    position: 'absolute',
                    top: '0px',
                    right: '0px',
                }}
            />
        </>
    )
}
