import {
    InterfaceContainer,
    InterfaceHeader,
    HeaderText,
    NewsContainer,
    NewsItem,
    UserIcon,
    UserName
} from "./Interface";
import React from 'react'
import UserPic from '../assets/user.png'

export const NewsInterface = () => {
    return (
        <InterfaceContainer>
            <InterfaceHeader>
                <HeaderText>Local News</HeaderText>
            </InterfaceHeader>
            <NewsContainer>
                <NewsItem>
                    <UserIcon src={UserPic} />
                    <UserName>Bob Marley</UserName>
                </NewsItem>
                <NewsItem>
                    <UserIcon src={UserPic} />
                    <UserName>Bob Marley</UserName>
                </NewsItem>
                <NewsItem>
                    <UserIcon src={UserPic} />
                    <UserName>Bob Marley</UserName>
                </NewsItem>
            </NewsContainer>
        </InterfaceContainer>
    );
}
