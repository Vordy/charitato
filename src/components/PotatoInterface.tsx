import {
    HeaderText,
    HistoryContainer,
    HistoryItem,
    HistoryScroller,
    InterfaceContainer,
    InterfaceHeader,
    PotatoContainer,
    PotatoDescriptor,
    SectionTitle,
    SubmitButton,
    SubmitContainer,
    UserIcon,
    UserName,
} from './Interface'
import { Potato, PotatoTypes } from 'assets/potatoes/potato'
import React from 'react'

import AnonUserPic from 'assets/users/user.png'

export const PotatoInterface = () => {
    return (
        <InterfaceContainer>
            <InterfaceHeader>
                <HeaderText>You have a potato!</HeaderText>
            </InterfaceHeader>

            <PotatoContainer>
                <Potato
                    type={PotatoTypes.Medium}
                    style={{ width: '50%', height: 'auto' }}
                />
                <PotatoDescriptor>It's super hot!</PotatoDescriptor>
            </PotatoContainer>

            <HistoryContainer>
                <SectionTitle>History</SectionTitle>
                <HistoryScroller>
                    <HistoryItem>
                        <UserIcon src={AnonUserPic} />
                        <UserName>Bob Marley</UserName>
                    </HistoryItem>
                    <HistoryItem>
                        <UserIcon src={AnonUserPic} />
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
