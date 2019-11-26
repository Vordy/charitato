import { Button } from 'common/button/Button'
import { ButtonSizes, ButtonTypes } from 'common/button/ButtonUtils'
import { DashboardModal } from 'components/DashboardModals'
import {
    HeaderText,
    HistoryContainer,
    HistoryItem,
    HistoryScroller,
    InfoText,
    InterfaceContainer,
    InterfaceHeader,
    NewPotatoValue,
    NewPotatoValueContainer,
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
import Potato_Hot from 'assets/potatoes/MEDIUM.svg'
import Potato_Fresh from 'assets/potatoes/FRESH.svg'
import React, { useCallback } from 'react'
import UserPic from 'assets/user.png'

const hasPotatoInterface = () => {
    return (
        <InterfaceContainer>
            <InterfaceHeader>
                <HeaderText>You have a potato!</HeaderText>
            </InterfaceHeader>

            <PotatoContainer>
                <PotatoIcon src={Potato_Hot} />
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
                        text={'Pay it'}
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

const noPotatoInterface = () => {
    return (
        <InterfaceContainer>
            <InterfaceHeader>
                <HeaderText>Create a potato!</HeaderText>
            </InterfaceHeader>

            <PotatoContainer>
                <PotatoIcon src={Potato_Fresh} />
                <PotatoDescriptor>
                    You don't have a potato right now.
                </PotatoDescriptor>
                <PotatoDescriptor>
                    Create one to send to your friends!
                </PotatoDescriptor>
            </PotatoContainer>

            <NewPotatoValueContainer>
                <SectionTitle>The value of your new potato:</SectionTitle>
                <NewPotatoValue>
                <p>$1</p>
                </NewPotatoValue>
            </NewPotatoValueContainer>

            <SubmitContainer>
                <SubmitButton>
                    <DashboardModal {...{modalName: "createPotatoModal", openText: "Create potato"}} />
                </SubmitButton>
            </SubmitContainer>

            <InfoText>
                This potato is worth $1.00 USD. To create a potato of greater
                value please download our app for iOS or Android. All proceeds
                from potato donations go towards the charity/nonprofit of your
                choice.
            </InfoText>

            <InterfaceHeader />
        </InterfaceContainer>
    )
}

export const PotatoInterface = () => {
    const potatoState = useCallback((hasPotato: boolean) => {
        return hasPotato ? hasPotatoInterface() : noPotatoInterface()
    }, [])

    return (
        <UserContext.Consumer>
            {value => potatoState(value.hasPotato)}
        </UserContext.Consumer>
    )
}
