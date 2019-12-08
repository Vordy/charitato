import React, { useContext } from 'react'
import {
    FriendsContainer,
    FriendsListContainer,
    FriendsList,
    FriendsIcon,
    FriendsHeader
} from 'common/dashboard/Interface'
// import { UserContext } from 'pages/Dashboard'

export const FriendsInterface = () => {
    // const user = useContext(UserContext)

    return (
        <FriendsContainer>
            <FriendsListContainer>
                <FriendsIcon></FriendsIcon>
                <FriendsHeader></FriendsHeader>
                <FriendsList>

                </FriendsList>
            </FriendsListContainer>
            <FriendsListContainer>
                <FriendsHeader></FriendsHeader>
                <FriendsIcon></FriendsIcon>
                <FriendsList>

                </FriendsList>
            </FriendsListContainer>
        </FriendsContainer>
        // <div>
        //     <div>Friends Interface</div>
        //     <div>Username: {user.username}</div>
        // </div>
    )
}
