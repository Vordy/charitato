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
    SectionTitle,
    SubmitButton,
    SubmitContainer,
    UserIcon,
    UserName,
} from './Interface'
import { Potato, PotatoTypes } from 'assets/potatoes/potato'
import React from 'react'

import AnonUserPic from 'assets/users/user.png'

const defaultModal = {
    data: {},
    name: 'error: no modal',
}
export const ModalContext = React.createContext(defaultModal)

const HasPotatoInterface = () => {
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

export const PotatoInterface = () => {
    return <HasPotatoInterface />
}
