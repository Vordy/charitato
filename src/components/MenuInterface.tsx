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

    return (
        <MenuContainer>
            <MenuItem>
                <img
                    src={
                        page === DashboardPages.MILESTONES
                            ? DashboardSelected
                            : Dashboard
                    }
                    onClick={() => {
                        setPage(DashboardPages.MILESTONES)
                    }}
                />
            </MenuItem>
            <MenuItem>
                <img
                    src={
                        page === DashboardPages.LEADERBOARDS
                            ? LeaderboardsSelected
                            : Leaderboards
                    }
                    onClick={() => {
                        setPage(DashboardPages.LEADERBOARDS)
                    }}
                />
            </MenuItem>
            <MenuItem>
                <img
                    src={
                        page === DashboardPages.POTATO ? PotatoSelected : Potato
                    }
                    onClick={() => {
                        setPage(DashboardPages.POTATO)
                    }}
                />
            </MenuItem>
            <MenuItem>
                <img
                    src={
                        page === DashboardPages.FRIENDS
                            ? FriendsSelected
                            : Friends
                    }
                    onClick={() => {
                        setPage(DashboardPages.FRIENDS)
                    }}
                />
            </MenuItem>
            <MenuItem>
                <img
                    src={
                        page === DashboardPages.ACCOUNT
                            ? AccountSelected
                            : Account
                    }
                    onClick={() => {
                        setPage(DashboardPages.ACCOUNT)
                    }}
                />
            </MenuItem>
        </MenuContainer>
    )
}
