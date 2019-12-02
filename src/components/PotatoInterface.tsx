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
    PotatoStatus,
    PotatoButtonContainer,
    PotatoButton,
} from './Interface'
import Potato from '../assets/potatoes/MEDIUM.svg'
import React from 'react'
import UserPic from '../assets/user.png'

export const PotatoInterface = () => {
    return (
        <PotatoContainer>
            <PotatoIcon src={Potato} />
            <PotatoStatus>You have a potato!</PotatoStatus>
            <PotatoDescriptor>It's super hot!</PotatoDescriptor>
            <PotatoButtonContainer>
                <PotatoButton></PotatoButton>
                <PotatoButton></PotatoButton>
            </PotatoButtonContainer>
        </PotatoContainer>
    )
}
