import { Colors } from 'theme/Colors'
import { getTheme } from 'theme/themes'
import styled from '@emotion/styled'

export const InterfaceContainer = styled.div`
    border: solid 1px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-family: 'Helvetica Nueue', roboto, Arial, Helvetica, sans-serif;
    font-weight: bold;
    text-align: center;
    color: ${getTheme().foreground};

    width: 350px;
    height: 700px;
    margin: 2vw;
    margin-top: 100px;
`

export const InterfaceHeader = styled.div`
    display: flex;
    background-color: ${Colors.Rose};
    padding-left: 8px;
`

export const HeaderText = styled.p`
    color: ${Colors.White};
    display: table-cell;
    vertical-align: middle;
    text-align: center;
`

export const SectionTitle = styled.p`
    text-align: left;
    margin-left: 5%;
`

export const PotatoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const PotatoDescriptor = styled.p`
    font-weight: 300;
`

export const HistoryContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 40%;
    align-self: center;
`

export const HistoryScroller = styled.div`
    overflow: hidden;
    overflow-y: scroll;
    border: solid 1px;
    height: 70%;
    margin-right: 5%;
    margin-left: 5%;
`

export const HistoryItem = styled.div`
    border: solid 1px;
    display: flex;
    flex-direction: row;
`

export const NewPotatoValueContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 40%;
    align-self: center;
`

export const NewPotatoValue = styled.div`
    border: solid 10px ${Colors.LightGreen};
    border-radius: 999px;
    height: 100px;
    width: 100px;
    font-size: 200%;
    display: table;
    margin-top: 20px;
    box-shadow: 0px 0px 18px ${Colors.LightGreen};
`

export const UserIcon = styled.img`
    align-self: center;
    width: 10%;
    height: auto;
    margin-left: 2%;
`

export const UserName = styled.p`
    margin-left: 5%;
`

export const SubmitContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    height: 5%;
    margin-bottom: 20px;
`

export const SubmitButton = styled.div`
    display: table;
    width: 35%;
    height: 100%;
`

export const InfoText = styled.p`
    font-size: 8pt;
    text-align: left;
    margin-left: 2%;
    margin-right: 2%;
    font-weight: 1;
`

export const FriendsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    height: 100%;
`;

export const FriendsListContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 33%;
    height: 80%;
`;

export const FriendsList = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const FriendsHeader = styled.div`

`;

export const FriendsIcon = styled.div`

`;

export const FriendsItem = styled.div`

`;
