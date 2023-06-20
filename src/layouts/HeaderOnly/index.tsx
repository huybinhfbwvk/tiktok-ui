import Header from '~/layouts/components/Header';
import styles from './HeaderOnly.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';

interface HeaderOnlyProps {
    children: React.ReactNode;
}
const cx = classNames.bind(styles);

const HeaderOnly: React.FC<HeaderOnlyProps> = ({ children }) => {
    return (
        <div>
            <Header/>
            <div className={cx('container')}>
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
};

export default HeaderOnly;
