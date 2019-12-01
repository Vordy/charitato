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
} from 'components/Interface'
import { Potato, PotatoTypes } from 'assets/potatoes/potato'
import AnonUserPic from 'assets/users/user.png'
import { localize } from 'assets/strings/localize'
import React from 'react'

export const PotatoInterface = () => {
    return (
        <InterfaceContainer>
            <InterfaceHeader>
                <HeaderText>
                    {localize('char.dashboard.potato.haveAPotato')}
                </HeaderText>
            </InterfaceHeader>

            <PotatoContainer>
                <Potato
                    type={PotatoTypes.Medium}
                    style={{ width: '50%', height: 'auto' }}
                />
                <PotatoDescriptor>
                    {localize('char.dashboard.potato.status.superHot')}
                </PotatoDescriptor>
            </PotatoContainer>

            <HistoryContainer>
                <SectionTitle>
                    {localize('char.dashboard.potato.history')}
                </SectionTitle>
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
