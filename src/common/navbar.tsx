import { getTheme, switchTheme } from 'theme/themes'
import { Link } from 'react-router-dom'
import Logo from 'assets/logo.svg'
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

const LogoItem = styled.img`
    cursor: pointer;
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
            <LogoItem src={Logo} onClick={switchTheme} />

            <NavItem to="/">Home</NavItem>

            <NavItem to="/dashboard">Dashboard</NavItem>

            <NavItem to="/">Partners</NavItem>

            <NavItem to="/">Milestones</NavItem>
        </Bar>
    )
}
