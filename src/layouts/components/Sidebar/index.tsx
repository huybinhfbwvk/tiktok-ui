import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';

import styles from './Sidebar.module.scss';
import config from '~/config';
import Menu, { MenuItem } from './Menu';
import {
    HomeIcon,
    HomeActiveIcon,
    FollowingUserIcon,
    FollowingUserActiveIcon,
    ExploreIcon,
    ExploreActiveIcon,
    LiveIcon,
    LiveActiveIcon,
} from '~/components/Icons';
import SuggestedAccounts, { FollowingAccounts } from '~/components/SuggestedAccounts';
import SuggestedAccountsNonLogin from '~/components/SuggestedAccounts/SuggestedAccountsNonLogin';
import FooterSidebar from '~/components/FooterSidebar';
import axios from 'axios';
import * as useServices from '~/services/userServices';
import { error } from 'console';
import Dicover from '~/components/SuggestedAccounts/Discover';

const cx = classNames.bind(styles);

function Sidebar() {
    const [suggestedUsers, setSuggestedUsers] = useState([]);

    useEffect(() => {
        useServices
            .getSuggested({ page: 11, perPage: 5 })
            .then((data) => {
                setSuggestedUsers(data);
            })
            .catch((error) => console.log(error));
    }, []);

    const currentUser = true;

    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<FollowingUserIcon />}
                    activeIcon={<FollowingUserActiveIcon />}
                />
                <MenuItem
                    title="Explore"
                    to={config.routes.explore}
                    icon={<ExploreIcon />}
                    activeIcon={<ExploreActiveIcon />}
                />
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
            </Menu>

            {currentUser ? (
                <SuggestedAccounts label="Suggested accounts" data={suggestedUsers} />
            ) : (
                <SuggestedAccountsNonLogin />
            )}

            <FollowingAccounts label="Following accounts" data={suggestedUsers} />

            <Dicover />

            <FooterSidebar />
        </aside>
    );
}

export default Sidebar;
