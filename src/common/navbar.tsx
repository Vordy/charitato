import { Colors } from '../theme/Colors'
import { NavLink } from 'react-router-dom'
import Logo from '../assets/logo.svg'
import React from 'react'
import styled from '@emotion/styled'

const Bar = styled.div`
    // background-color: ${Colors.RichDark};
    // position: sticky;  //Make it follow scrolling
    top: 0;
    z-index: 10;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`

const LogoItem = styled.img``

const NavItem = styled(NavLink)`
    // background-color: ${Colors.Rose};
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-left: 2%;
    padding-right: 2%;
    margin-left: 1%;
    margin-right: 1%;
    text-decoration: none;
    color: black;
    font-family: 'Roboto', 'Arial', sans-serif;
    font-weight: bold;
`

export const NavBar = () => {
    return (
        <Bar>
            <LogoItem src={Logo} />

            <NavItem to="/">
                Home
            </NavItem>

            <NavItem to="/dashboard">
                Dashboard
            </NavItem>

            <NavItem to="/">
                Partners
            </NavItem>

            <NavItem to="/dashboard">
                Sign in
            </NavItem>
        </Bar>
    )
}
