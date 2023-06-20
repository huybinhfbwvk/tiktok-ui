import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

interface MenuItemProps {
    title: string;
    to: string;
    icon: React.ReactNode;
    activeIcon: React.ReactNode;
}

const cx = classNames.bind(styles);

function MenuItem({ title, to, icon, activeIcon }: MenuItemProps) {
    const renderMenu = (activeItem = false) => (
        <>
            {activeItem ? activeIcon || icon : icon}
            <span className={cx('menu-title')}>{title}</span>
        </>
    );
    return (
        <NavLink className={({ isActive }) => cx('menu-item', { active: isActive })} to={to}>
            {({ isActive }) => renderMenu(isActive)}
        </NavLink>
    );
}
export default MenuItem;
