import { MenuContainer, MenuItem } from 'common/dashboard/menu_styles'
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
import React, { useContext } from 'react'
import { DashboardPages, PageContext } from 'pages/Dashboard'

export const MenuInterface = () => {
    const { page, setPage } = useContext(PageContext)

    const changeURL = (newURL: string) => {
        window.history.pushState({}, '', `${newURL}`)
    }

    return (
        <MenuContainer>
            <MenuItem>
                <img
                    alt={'Menu Item'}
                    src={
                        page === DashboardPages.MILESTONES
                            ? DashboardSelected
                            : Dashboard
                    }
                    onClick={() => {
                        setPage(DashboardPages.MILESTONES)
                        changeURL(DashboardPages.MILESTONES)
                    }}
                />
            </MenuItem>
            <MenuItem>
                <img
                    alt={'Menu Item'}
                    src={
                        page === DashboardPages.LEADERBOARDS
                            ? LeaderboardsSelected
                            : Leaderboards
                    }
                    onClick={() => {
                        setPage(DashboardPages.LEADERBOARDS)
                        changeURL(DashboardPages.LEADERBOARDS)
                    }}
                />
            </MenuItem>
            <MenuItem>
                <img
                    alt={'Menu Item'}
                    src={
                        page === DashboardPages.POTATO ? PotatoSelected : Potato
                    }
                    onClick={() => {
                        setPage(DashboardPages.POTATO)
                        changeURL(DashboardPages.POTATO)
                    }}
                />
            </MenuItem>
            <MenuItem>
                <img
                    alt={'Menu Item'}
                    src={
                        page === DashboardPages.FRIENDS
                            ? FriendsSelected
                            : Friends
                    }
                    onClick={() => {
                        setPage(DashboardPages.FRIENDS)
                        changeURL(DashboardPages.FRIENDS)
                    }}
                />
            </MenuItem>
            <MenuItem>
                <img
                    alt={'Menu Item'}
                    src={
                        page === DashboardPages.ACCOUNT
                            ? AccountSelected
                            : Account
                    }
                    onClick={() => {
                        setPage(DashboardPages.ACCOUNT)
                        changeURL(DashboardPages.ACCOUNT)
                    }}
                />
            </MenuItem>
        </MenuContainer>
    )
}
