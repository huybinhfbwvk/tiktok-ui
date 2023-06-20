import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { MenuItemProps } from '~/layouts/components/Header/index';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Header from './Header';
import styles from './Menu.module.scss';
import MenuItem from './MenuItems';

const cx = classNames.bind(styles);

interface MenuProps {
    children?: React.ReactNode;
    items?: MenuItemProps[];
    onChange?: (item: MenuItemProps) => void;
    hideOnClick?: boolean;
}

function Menu({ children, items = [], hideOnClick = false, onChange }: MenuProps) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev: any) => [...prev, item.children!]);
                        } else {
                            onChange?.(item);
                        }
                    }}
                />
            );
        });
    };

    const handleBackClick = () => {
        setHistory((prev) => prev.slice(0, -1));
    };

    const renderResult = (attrs: any) => (
        <div className={cx('menu-list')} tabIndex={-1} {...attrs}>
            <PopperWrapper className={cx('menu-popper')}>
                {history.length > 1 && <Header title="Language" onBack={handleBackClick} />}
                <div className={cx('menu-body')}>{renderItems()}</div>
            </PopperWrapper>
        </div>
    );

    const handleResetToFirstPage = () => {
        setHistory((prev) => prev.slice(0, 1));
    };

    return (
        <Tippy
            delay={[0, 500]}
            interactive
            hideOnClick={hideOnClick}
            placement="bottom-end"
            render={renderResult}
            onHide={handleResetToFirstPage}
        >
            <div>{children}</div>
        </Tippy>
    );
}

export default Menu;
