import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Header from '~/layouts/components/Header';
import Sidebar from '../components/Sidebar';
import Content from '../components/Content';
import Home from '~/pages/Home';
import LoginModal from '~/actions/Login';
import { useContext, useState } from 'react';
import { ModalContext } from '~/components/ModalProvider';

const cx = classNames.bind(styles);

type DefaultLayoutProps = {
    children: React.ReactNode;
};

function DefaultLayout(props: DefaultLayoutProps) {
    const [active, setActive] = useState(false);

    const handleShowModal = () => {
        setActive(true);
    };

    const handleHideModal = () => {
        setActive(false);
    };

    return (
        <div className={cx('wrapper')}>
            <Header />
            <Home />
            {active && <LoginModal onHide={handleHideModal} />}
        </div>
    );
}

export default DefaultLayout;
