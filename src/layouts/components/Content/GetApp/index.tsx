import classNames from 'classnames/bind';
import styles from './GetApp.module.scss';

const cx = classNames.bind(styles);

function GetApp() {
    return <div className={cx('get-app')}>Get app</div>;
}
export default GetApp;
