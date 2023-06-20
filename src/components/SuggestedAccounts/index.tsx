import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import AccountItem from './AccountItem';
import * as suggestedAccountService from '~/services/suggestedAccountService';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

interface SuggestedAccountsProps {
    label: string;
    data?: any;
}
interface FollowingAccountsProps {
    label: string;
    data?: any;
}

function SuggestedAccounts({ label, data = [] }: SuggestedAccountsProps) {
    const [suggests, setSuggests] = useState([]);
    const [seeAll, setSeeAll] = useState(false);

    useEffect(() => {
        const fetchAPI = async () => {
            if (!seeAll) {
                const result = await suggestedAccountService.suggest(1, 5);
                setSuggests(result);
            } else {
                const result = await suggestedAccountService.suggest(1, 16);
                setSuggests(result);
            }
        };

        fetchAPI();
    }, [seeAll]);

    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>

            {suggests.map((account: any) => (
                <AccountItem key={account.id} data={account} />
            ))}

            {seeAll ? (
                <div className={cx('more-btn')} onClick={() => setSeeAll(false)}>
                    See less
                </div>
            ) : (
                <div className={cx('more-btn')} onClick={() => setSeeAll(true)}>
                    See all
                </div>
            )}
        </div>
    );
}

export function FollowingAccounts({ label, data = [] }: FollowingAccountsProps) {
    console.log(data);
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>

            {data.map((account: any) => (
                <AccountItem key={account.id} data={account} />
            ))}

            <p className={cx('more-btn')}>See more</p>
        </div>
    );
}

export default SuggestedAccounts;
