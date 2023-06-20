import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import 'tippy.js/dist/tippy.css';
import img from '~/assets/img';
import styles from './Header.module.scss';
import routesConfig from '~/config/route';

import {
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faSignOut,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '~/components/Button';
import { MessageIcon, NotiIcon, UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Menu from '~/components/Popper/Menu';
import Search from '~/components/Search';
import { Link } from 'react-router-dom';
import LoginModal from '~/actions/Login';
import { ModalContext } from '~/components/ModalProvider';
import { useContext, useState } from 'react';

const cx = classNames.bind(styles);

export interface MenuItemProps {
    icon: JSX.Element;
    title: string;
    to?: string;
    children?: object;
}

const MENU_ITEMS: MenuItemProps[] = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

function Header(): JSX.Element {
    const currentUser = false;
    const [active, setActive] = useState(false);
    const context = useContext(ModalContext);

    const handleMenuChange = (menuItem: any) => {
        switch (menuItem.type) {
            case 'language':
                break;
            default:
        }
    };

    const handleShowModal = () => {
        setActive(true);
    };

    const handleHideModal = () => {
        setActive(false);
    };

    const handleShow = () => {
        return <LoginModal onHide={handleHideModal} />;
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'Profile',
            to: '/@chipupu',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Setting',
            to: '/setting',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={routesConfig.home}>
                    <img src={img.logo} alt="Tiktok" />
                </Link>

                {/* Search */}
                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy content="Upload Video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy content="Messages" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy content="Noti" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <NotiIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text onClick={handleShow}>
                                Upload
                            </Button>
                            <Button primary onClick={handleShow}>
                                Log in
                            </Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <>
                                <Image
                                    src="https://avatars.githubusercontent.com/u/72483836?v=4"
                                    className={cx('user-avatar')}
                                    alt="Nguyen Van A"
                                    fallback=""
                                />
                            </>
                        ) : (
                            <>
                                <button className={cx('more-btn')}>
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </button>
                            </>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
