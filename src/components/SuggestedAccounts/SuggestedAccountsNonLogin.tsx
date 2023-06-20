import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function SuggestedAccountsNonLogin() {
    return (
        <div className={cx('wrapper-non-log')}>
            <p>Log in to follow creators, like videos, and view comments.</p>
            <Button long outline>
                Log in
            </Button>
        </div>
    );
}

export default SuggestedAccountsNonLogin;
