import {
    InterfaceContainer,
    InterfaceHeader,
    HeaderText,
    PotatoContainer,
    PotatoIcon,
    PotatoDescriptor,
    HistoryContainer,
    SectionTitle,
    HistoryScroller,
    HistoryItem,
    UserIcon,
    UserName,
    SubmitContainer,
    SubmitButton,
} from './Interface'
import Potato from 'assets/potatoes/MEDIUM.svg'
import React from 'react'
import UserPic from 'assets/user.png'
import { UserContext } from 'pages/Dashboard'

export const PotatoInterface = () => {
    return (
        <InterfaceContainer>
            <InterfaceHeader>
                <UserContext.Consumer>
                    {value =>
                        value.hasPotato ? (
                            <HeaderText>You have a potato!</HeaderText>
                        ) : (
                            <HeaderText>Create a potato!</HeaderText>
                        )
                    }
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
