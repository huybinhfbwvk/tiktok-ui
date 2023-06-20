import { faDesktop, faMobile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './GetApp.module.scss';

const cx = classNames.bind(styles);

function GetAppOnClick() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('btn-wrapper')}>
                <button className={cx('btn-wrapper-element')}>
                    <FontAwesomeIcon icon={faDesktop} />
                    <p>Get Tiktok for destop</p>
                </button>
                <button className={cx('btn-wrapper-element')}>
                    <FontAwesomeIcon icon={faMobile} />
                    <p>Get Tiktok App</p>
                </button>
            </div>
        </div>
    );
}

export default GetAppOnClick;
