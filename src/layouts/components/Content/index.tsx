import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useState } from 'react';
import Button from '~/components/Button';
import styles from './Content.module.scss';
import GetAppOnClick from './GetApp/GetAppOnClick';
import VideoWrapper from './VideoWrapper';
import ScrollToTop from '~/components/ScrollToTop';

const cx = classNames.bind(styles);

function Content() {
    const [show, setShow] = useState(false);

    const handleOnClick = () => {
        setShow(true);
    };
    const handleCloseOnClick = () => {
        setShow(false);
    };

    return (
        <>
            <div className={cx('wrapper')}>
                <VideoWrapper />
            </div>
            <div className={cx('get-app')}>
                {!show ? (
                    <Button className={cx('get-app-btn')} onClick={handleOnClick}>
                        Get app
                    </Button>
                ) : (
                    <div className={cx('get-app-show')}>
                        <GetAppOnClick />
                        <button className={cx('btn-close')} onClick={handleCloseOnClick}>
                            <FontAwesomeIcon icon={faXmark} />
                        </button>
                    </div>
                )}
                <ScrollToTop />
            </div>
        </>
    );
}

export default Content;
