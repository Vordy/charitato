import { Button } from 'common/button/Button'
import { ButtonSizes, ButtonTypes } from 'common/button/ButtonUtils'
import {
    HeaderText,
    HistoryContainer,
    HistoryItem,
    HistoryScroller,
    InfoText,
    InterfaceContainer,
    InterfaceHeader,
    PotatoContainer,
    PotatoDescriptor,
    PotatoIcon,
    SectionTitle,
    SubmitButton,
    SubmitContainer,
    UserIcon,
    UserName,
} from './Interface'
import { UserContext } from 'pages/Dashboard'
import Potato from 'assets/potatoes/MEDIUM.svg'
import React, { useCallback } from 'react'
import UserPic from 'assets/user.png'

export const PotatoInterface = () => {
    const potatoHeader = useCallback((hasPotato: boolean) => {
        const potatoText = hasPotato ? 'You have a potato!' : 'Create a potato!'

        return <HeaderText>{potatoText}</HeaderText>
    }, [])

    return (
        <InterfaceContainer>
            <InterfaceHeader>
                <UserContext.Consumer>
                    {value => potatoHeader(value.hasPotato)}
                </UserContext.Consumer>
            </InterfaceHeader>

            <PotatoContainer>
                <PotatoIcon src={Potato} />
                <PotatoDescriptor>It's super hot!</PotatoDescriptor>
            </PotatoContainer>

            <HistoryContainer>
                <SectionTitle>History</SectionTitle>
                <HistoryScroller>
                    <HistoryItem>
                        <UserIcon src={UserPic} />
                        <UserName>Bob Marley</UserName>
                    </HistoryItem>
                    <HistoryItem>
                        <UserIcon src={UserPic} />
                        <UserName>Bob Marley</UserName>
                    </HistoryItem>
                </HistoryScroller>
            </HistoryContainer>

            <SubmitContainer>
                <SubmitButton>
                    <Button
                        buttonType={ButtonTypes.Primary}
                        buttonSize={ButtonSizes.Small}
                        text={'Send it'}
                        onClickHandler={(e: React.MouseEvent) => {
                            console.log('boom')
                        }}
                    />
                </SubmitButton>
                <SubmitButton>
                    <Button
                        buttonType={ButtonTypes.Primary}
                        buttonSize={ButtonSizes.Small}
                        text={'Pay it'}
                        onClickHandler={(e: React.MouseEvent) => {
                            console.log('boom')
                        }}
                    />
                </SubmitButton>
            </SubmitContainer>

            <InfoText>
                This potato is worth $1.00 USD. You can send it to a friend by
                clicking “Send it” or you can pay it off. The next screen will
                display the options available to you for both actions. All
                proceeds from potato donations go towards the charity/nonprofit
                of your choice.
            </InfoText>

            <InterfaceHeader />
        </InterfaceContainer>
    )
}
