import styled from '@emotion/styled'
import { Colors } from 'theme/Colors'

export const MenuContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: ${Colors.LightGray};
    position: absolute;
    bottom: 5%;
    overflow: auto;
    border-radius: 999px;
    padding-top: 8px;
    padding-bottom: 8px;
`;

export const MenuItem = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-left: 8px;
    margin-right: 8px;
    cursor: pointer;
`;
