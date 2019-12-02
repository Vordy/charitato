import { Colors } from '../theme/Colors'
import { getTheme } from '../theme/themes'
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

export const PotatoButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 48px;
`;

export const PotatoButton = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: ${Colors.LavendarCream};
    border-radius: 999px;
    margin-left: 32px;
    margin-right: 32px;
`;

export const PotatoIcon = styled.img``

export const PotatoStatus = styled.p`
    text-align: center;
`;

export const PotatoDescriptor = styled.p`
    text-align: center;
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
`

export const SubmitButton = styled.div`
    display: table;
    background-color: ${Colors.Rose};
    color: ${Colors.White};
    width: 35%;
    height: 100%;
    border-radius: 999px;
    cursor: pointer;
`

export const NewsContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`;

export const NewsItem = styled.div`
    display: flex;
    flex-direction: row;
`;
export const MenuContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: ${Colors.LavendarCream};
    position: fixed;
    bottom: 0;
    height: 8%;
    border-radius: 999px;
    padding-top: 8px;
    padding-bottom: 8px;
`;

export const MenuItem = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: ${Colors.White};
    border-radius: 999px;
    margin-left: 8px;
    margin-right: 8px;
`;

export const MenuItemSelected = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: ${Colors.Rose};
    border-radius: 999px;
    margin-left: 8px;
    margin-right: 8px;
`;
