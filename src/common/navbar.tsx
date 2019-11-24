import { Colors } from '../theme/Colors'
import { getTheme } from '../theme/themes'
import { Link } from 'react-router-dom'
import { switchTheme } from '../theme/themes'
import { Auth } from 'aws-amplify'
import Logo from '../assets/logo.svg'
import React, { useEffect, useState, Suspense } from 'react'
import styled from '@emotion/styled'

const Bar = styled.div`
    // background-color: ${Colors.RichDark};
    // position: sticky;  //Make it follow scrolling
    position: absolute;
    width: 70%; //TEMP FIX
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

const isAuth = async () => {
    try {
        await Auth.currentAuthenticatedUser()
        return true
    } catch (err) {
        return false
    }
}

// const SignInButton = () => {
//     const handleLogout = () => {
//         Auth.signOut()
//     }

//     const isLoggedIn = isAuth()

//     return isLoggedIn ? (
//         <NavItem to="/" onClick={handleLogout}>Sign out</NavItem>
//     ) : (
//         <NavItem to="/">Sign in</NavItem>
//     )
// }

export const NavBar = () => {

    return (
        <Bar>
            <LogoItem src={Logo} onClick={switchTheme}></LogoItem>

            <NavItem to="/">Home</NavItem>

            <NavItem to="/dashboard">Dashboard</NavItem>

            <NavItem to="/">Partners</NavItem>

            <NavItem to="/">Milestones</NavItem>
        </Bar>
    )
}
