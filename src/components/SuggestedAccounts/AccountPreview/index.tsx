import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

interface AccountPreviewProps {
    data?: any;
}

function AccountPreview({ data }: AccountPreviewProps) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Image className={cx('avatar')} src={data.avatar} alt={data.nickname} />
                <p className={cx('follow-btn')}>
                    <Button primary>Following</Button>
                </p>
            </div>
            <div className={cx('body')}>
                <div className={cx('item-info')}>
                    <p className={cx('nickname')}>
                        <strong>{data.nickname}</strong>
                        {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                    </p>
                    <p className={cx('name')}>{`${data.first_name} ${data.last_name}`}</p>
                    <p className={cx('analytics')}>
                        <strong className={cx('value')}>{data.followers_count}</strong>
                        <span className={cx('label')}>Followers</span>
                        <strong className={cx('value')}>{data.likes_count}</strong>
                        <span className={cx('label')}>Likes</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AccountPreview;
