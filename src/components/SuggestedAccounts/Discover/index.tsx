import classNames from 'classnames/bind';
import styles from './Discover.module.scss';
import Button from '~/components/Button';
import { EightNoteIcon, SharpIcon } from '~/components/Icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Dicover() {
    return (
        <div className={cx('wrapper')}>
            <h3 className={cx('explore-title')}>Explore</h3>
            <ul className={cx('explore-content')}>
                <li className={cx('explore-btn')}>
                    <SharpIcon />
                    <a className={cx('explore-text')}>suthatla</a>
                </li>
                <li className={cx('explore-btn')}>
                    <SharpIcon />
                    <a className={cx('explore-text')}>mackedoi</a>
                </li>
                <li className={cx('explore-btn')}>
                    <SharpIcon />
                    <a className={cx('explore-text')}>sansangthaydoi</a>
                </li>
                <li className={cx('explore-btn')}>
                    <FontAwesomeIcon icon={faMusic} />
                    <a className={cx('explore-text')}>Yêu Đơn Phương Là Gì (MEE Remix) - Mee Media & h0n & BHMedia</a>
                </li>
                <li className={cx('explore-btn')}>
                    <FontAwesomeIcon icon={faMusic} />
                    <a className={cx('explore-text')}>Thiên Thần Tình Yêu - RICKY STAR ạnd T.R.I</a>
                </li>
                <li className={cx('explore-btn')}>
                    <SharpIcon />
                    <a className={cx('explore-text')}>7749hieuung</a>
                </li>
                <li className={cx('explore-btn')}>
                    <SharpIcon />
                    <a className={cx('explore-text')}>genzlife</a>
                </li>
                <li className={cx('explore-btn')}>
                    <FontAwesomeIcon icon={faMusic} />
                    <a className={cx('explore-text')}>Vui Lắm Nha (TikTok Remix 1) - Hương Ly & Jombie</a>
                </li>
                <li className={cx('explore-btn')}>
                    <FontAwesomeIcon icon={faMusic} />
                    <a className={cx('explore-text')}>Con Bướm Xuân (Remix) - Cukak & H2K & BHMedia</a>
                </li>
            </ul>
        </div>
    );
}

export default Dicover;
