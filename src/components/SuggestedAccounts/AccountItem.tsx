import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './SuggestedAccounts.module.scss';
import AccountPreview from './AccountPreview';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

interface AccountItemProps {
    data: any;
}

function AccountItem({ data }: AccountItemProps) {
    const renderPreview = (props: any) => {
        return (
            <div tabIndex={-1} {...props}>
                <PopperWrapper className={cx('preview')}>
                    <AccountPreview data={data} />
                </PopperWrapper>
            </div>
        );
    };

    return (
        <Tippy interactive delay={[800, 0]} placement="bottom-end" render={renderPreview}>
            <div className={cx('account-item')}>
                <Image className={cx('avatar')} src={data.avatar} alt={data.nickname} />
                <div className={cx('item-info')}>
                    <p className={cx('nickname')}>
                        <strong>{data.nickname}</strong>
                        {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                    </p>
                    <p className={cx('name')}>{`${data.first_name} ${data.last_name}`}</p>
                </div>
            </div>
        </Tippy>
    );
}

export default AccountItem;
