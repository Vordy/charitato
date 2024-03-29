import { getTheme } from 'theme/themes'
import { Link } from 'react-router-dom'
import { Logo } from 'assets/logo/logo'
import { localize } from 'assets/strings/localize'
import React from 'react'
import styled from '@emotion/styled'

const Bar = styled.div`
    // position: sticky;  //Make it follow scrolling
    position: absolute;
    width: 70%; //TODO: adjusted this for the dashboard sign out button
    top: 0;
    z-index: 10;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`

const NavItem = styled(Link)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-left: 3%;
    margin-right: 3%;
    text-decoration: none;
    color: ${getTheme().foreground};
    font-family: 'Helvetica Nueue', roboto, Arial, Helvetica, sans-serif;
    font-weight: bold;
`

export const NavBar = () => {
    return (
        <Bar>
            <Logo style={{ cursor: 'pointer' }} />

            <NavItem to="/">{localize('char.navbar.main.home')}</NavItem>

            <NavItem to="/dashboard">
                {localize('char.navbar.main.dashboard')}
            </NavItem>

            <NavItem to="/">{localize('char.navbar.main.partners')}</NavItem>

            <NavItem to="/">{localize('char.navbar.main.milestones')}</NavItem>
        </Bar>
    )
}
