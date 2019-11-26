import { Button } from 'common/button/Button'
import { ButtonSizes, ButtonTypes } from 'common/button/ButtonUtils'
import {CreatePotatoInterface} from 'components/DashboardModals'
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
import { UserContext } from 'pages/Dashboard'
import Potato from 'assets/potatoes/MEDIUM.svg'
import React from 'react'
import UserPic from 'assets/user.png'

export const PotatoInterface = () => {
    return (
        <InterfaceContainer>
            <CreatePotatoInterface />
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

            <InterfaceHeader />
        </InterfaceContainer>
    )
}
