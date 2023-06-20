import classNames from 'classnames/bind';
import styles from './AccountRender.module.scss';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

interface AccountRenderProps {
    video: any;
}

function AccountRender({ video }: AccountRenderProps) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Image className={cx('avatar')} src={video.user.avatar} alt={video.user.nickname} />
                <p className={cx('follow-btn')}>
                    <Button primary>Following</Button>
                </p>
            </div>
            <div className={cx('body')}>
                <div className={cx('item-info')}>
                    <p className={cx('nickname')}>
                        <strong>{video.user.nickname}</strong>
                        {video.user.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                    </p>
                    <p className={cx('name')}>{`${video.user.first_name} ${video.user.last_name}`}</p>
                    <p className={cx('analytics')}>
                        <strong className={cx('value')}>{video.user.followers_count}</strong>
                        <span className={cx('label')}>Followers</span>
                        <strong className={cx('value')}>{video.user.likes_count}</strong>
                        <span className={cx('label')}>Likes</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

AccountRender.propTypes = {};

export default AccountRender;
