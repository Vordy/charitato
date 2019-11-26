import {
    HeaderText,
    HistoryContainer,
    HistoryItem,
    HistoryScroller,
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
import React from 'react'
import UserPic from 'assets/user.png'

export const PotatoInterface = () => {
    const potatoState = (hasPotato: boolean) => {
        return hasPotato ? (
            <HeaderText>You have a potato!</HeaderText>
        ) : (
            <HeaderText>Create a potato!</HeaderText>
        )
    }

    return (
        <InterfaceContainer>
            <InterfaceHeader>
                <UserContext.Consumer>
                    {value => potatoState(value.hasPotato)}
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
                    <HeaderText>TEST</HeaderText>
                </SubmitButton>
                <SubmitButton>
                    <HeaderText>TEST</HeaderText>
                </SubmitButton>
            </SubmitContainer>

            <InterfaceHeader />
        </InterfaceContainer>
    )
}
