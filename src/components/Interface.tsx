import styled from '@emotion/styled'
import { Colors } from '../theme/Colors'

export const InterfaceContainer = styled.div`
    border: solid 1px;
    margin-right: 5%;
    margin-left: 5%;
    width: 20%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-family: 'Helvetica Nueue', roboto, Arial, Helvetica, sans-serif;
    font-weight: bold;
    text-align: center;
    color: ${Colors.RichDark};
`

export const InterfaceHeader = styled.div`
    display: table;
    background-color: ${Colors.Rose};
    height: 5%;
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
    // border: solid 1px;
`

export const PotatoIcon = styled.img`
    width: 50%;
    height: auto;
`

export const PotatoDescriptor = styled.p``

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