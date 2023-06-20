import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Header from '~/layouts/components/Header';
import Sidebar from '~/layouts/components/Sidebar';
import Content from '~/layouts/components/Content';
import { useState } from 'react';

const cx = classNames.bind(styles);
function Home() {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <Content />
            </div>
        </div>
    );
}

export default Home;
