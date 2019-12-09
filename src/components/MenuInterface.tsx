import { MenuContainer, MenuItem } from "common/dashboard/Interface";
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
import React from 'react'
import { Link } from 'react-router-dom'

export const MenuInterface = () => {
    return (
        <MenuContainer>
            <Link to={'/dashboard'}><MenuItem><img src={Dashboard} /></MenuItem></Link>
            <Link to={'/dashboard/leaderboards'}><MenuItem><img src={Leaderboards} /></MenuItem></Link>
            <Link to={'/dashboard/potato'}><MenuItem><img src={Potato} /></MenuItem></Link>
            <Link to={'/dashboard/friends'}><MenuItem><img src={Friends} /></MenuItem></Link>
            <Link to={'/dashboard/account'}><MenuItem><img src={Account} /></MenuItem></Link>
        </MenuContainer>
    );
}
