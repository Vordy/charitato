import { Button } from 'common/button/Button'
import { ButtonSizes, ButtonTypes } from 'common/button/ButtonUtils'
import { DashboardModal, ShowModal } from 'components/DashboardModals'
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
    SectionTitle,
    SubmitButton,
    SubmitContainer,
    UserIcon,
    UserName,
} from './Interface'
import { Potato, PotatoTypes } from 'assets/potatoes/potato'
import React, { useCallback } from 'react'

import AnonUserPic from 'assets/users/user.png'


const defaultModal = {
    name: "error: no modal",
    data: {}
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

const NoPotatoInterface = () => {
    const createPotatoModalData = {
        name: "createPotatoModal",
        data: {
            openText: "Create potato",
            startOpen: false,
        }
    }

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
                    <ModalContext.Provider value={createPotatoModalData}>
                        <ShowModal />
                    </ModalContext.Provider>
                    <DashboardModal
                        {...{
                            modalName: 'createPotatoModal',
                            openText: 'Create potato',
                            modalAction: NewPotato,
                        }}
                    />
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
        return hasPotato ? HasPotatoInterface() : NoPotatoInterface()
    }, [])

    return (
        <UserContext.Consumer>
            {value => potatoState(value.hasPotato)}
        </UserContext.Consumer>
    )
}
