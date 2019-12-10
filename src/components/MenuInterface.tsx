import { MenuContainer, MenuItem } from "common/dashboard/menu_styles";
import Dashboard from 'assets/menu/dashboard.png'
import Leaderboards from 'assets/menu/leaderboards.png'
import Potato from 'assets/menu/potato.png'
import Friends from 'assets/menu/friends.png'
import Account from 'assets/menu/account.png'
import DashboardSelected from 'assets/menu/dashboard_selected.png'
import LeaderboardsSelected from 'assets/menu/leaderboards_selected.png'
import PotatoSelected from 'assets/menu/potato_selected.png'
import FriendsSelected from 'assets/menu/friends_selected.png'
import AccountSelected from 'assets/menu/account_selected.png'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const MenuInterface = () => {
    const DashboardPages = {
        dashboard: '/dashboard',
        potato: '/dashboard/potato',
        milestones: '/dashboard/milestones',
        friends: '/dashboard/friends',
        leaderboards: '/dashboard/leaderboards',
        account: '/dashboard/account'
    };
    const [currentPage, setCurrentPage] = useState(DashboardPages.potato);
    return (
        <MenuContainer>
            <Link to={'/dashboard'} onClick={() => setCurrentPage(DashboardPages.dashboard)}>
                <MenuItem>
                    <img src={
                        (currentPage === DashboardPages.dashboard) ? DashboardSelected : Dashboard
                    } />
                </MenuItem>
            </Link>
            <Link to={'/dashboard/leaderboards'} onClick={() => setCurrentPage(DashboardPages.leaderboards)}>
                <MenuItem>
                    <img src={
                        (currentPage === DashboardPages.leaderboards) ? LeaderboardsSelected : Leaderboards
                    } />
                </MenuItem>
            </Link>
            <Link to={'/dashboard/potato'} onClick={() => setCurrentPage(DashboardPages.potato)}>
                <MenuItem>
                    <img src={
                        (currentPage === DashboardPages.potato) ? PotatoSelected : Potato
                    } />
                </MenuItem>
            </Link>
            <Link to={'/dashboard/friends'} onClick={() => setCurrentPage(DashboardPages.friends)}>
                <MenuItem>
                    <img src={
                        (currentPage === DashboardPages.friends) ? FriendsSelected : Friends
                    } />
                </MenuItem>
            </Link>
            <Link to={'/dashboard/account'} onClick={() => setCurrentPage(DashboardPages.account)}>
                <MenuItem>
                    <img src={
                        (currentPage === DashboardPages.account) ? AccountSelected : Account
                    } />
                </MenuItem>
            </Link>
        </MenuContainer>
    );
}
