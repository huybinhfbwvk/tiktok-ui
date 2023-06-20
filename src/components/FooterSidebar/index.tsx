import classNames from 'classnames/bind';
import styles from './FooterSidebar.module.scss';

const cx = classNames.bind(styles);

function FooterSidebar() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <a href="https://www.tiktok.com/about?lang=en" target="_blank">
                    About
                </a>
                <a href="https://newsroom.tiktok.com/" target="_blank">
                    Newsroom
                </a>
                <a href="https://www.tiktok.com/about/contact?lang=en" target="_blank">
                    Contact
                </a>
                <a href="https://careers.tiktok.com/" target="_blank">
                    Careers
                </a>
                <a href="https://www.bytedance.com/" target="_blank">
                    ByteDance
                </a>
            </div>
            <div className={cx('container')}>
                <a href="https://www.tiktok.com/forgood" target="_blank">
                    TikTok for Good
                </a>
                <a
                    href="https://www.tiktok.com/business/?attr_medium=tt_official_site_guidance&attr_source=tt_official_site&refer=tiktok_web"
                    target="_blank"
                >
                    Advertise
                </a>
                <a href="https://developers.tiktok.com/?refer=tiktok_web" target="_blank">
                    Developers
                </a>
                <a href="https://www.tiktok.com/transparency?lang=en" target="_blank">
                    Transparency
                </a>
                <a href="https://www.tiktok.com/tiktok-rewards/en" target="_blank">
                    TikTok Rewards
                </a>
                <a href="https://www.tiktok.com/embed" target="_blank">
                    TikTok Embeds
                </a>
            </div>
            <div className={cx('container')}>
                <a href="https://support.tiktok.com/en" target="_blank">
                    Help
                </a>
                <a href="https://www.tiktok.com/safety?lang=en" target="_blank">
                    Safety
                </a>
                <a href="https://www.tiktok.com/legal/terms-of-service?lang=en" target="_blank">
                    Terms
                </a>
                <a href="https://www.tiktok.com/legal/privacy-policy-row?lang=en" target="_blank">
                    Privacy
                </a>
                <a href="https://www.tiktok.com/creators/creator-portal/en-us/" target="_blank">
                    Creator Potal
                </a>
                <a href="https://www.tiktok.com/community-guidelines?lang=en" target="_blank">
                    Community Guidelines
                </a>
            </div>
            <span className={cx('copyright')}>©2023 TikTok</span>
        </div>
    );
}

export default FooterSidebar;
