import { useState, ReactNode } from 'react';
import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';

import styles from './ShareActions.module.scss';
import { ChevronDownIcon, EmailIcon, EmbedIcon, LinkRoundedIcon, PaperPlaneIcon } from '~/components/Icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import icons from '~/assets/icons';

const cx = classNames.bind(styles);

interface ShareMenuItem {
    icon: ReactNode;
    title: string;
}

interface ShareActionProps {
    children: React.ReactNode;
    offset: [number, number];
}

function ShareAction({ children, offset }: ShareActionProps) {
    const [expanded, setExpanded] = useState(false);

    const SHARE_MENU: ShareMenuItem[] = [
        {
            icon: <EmbedIcon />,
            title: 'Embed',
        },
        {
            icon: <PaperPlaneIcon />,
            title: 'Send to friends',
        },
        {
            icon: <img src={icons.facebook} alt="" />,
            title: 'Share to Facebook',
        },
        {
            icon: <img src={icons.kakaotalk} alt="" />,
            title: 'Share to WhatsApp',
        },
        {
            icon: <LinkRoundedIcon />,
            title: 'Copy link',
        },
    ];

    const EXPANDED_SHARE_MENU: ShareMenuItem[] = [
        ...SHARE_MENU,
        {
            icon: <img src={icons.facebook} alt="" />,
            title: 'Share to Twitter',
        },
        {
            icon: <img src={icons.twitter} alt="" />,
            title: 'Share to LinkedIn',
        },
        {
            icon: <img src={icons.instagram} alt="" />,
            title: 'Share to Reddit',
        },
        {
            icon: <img src={icons.line} alt="" />,
            title: 'Share to Instagram',
        },
        {
            icon: <EmailIcon />,
            title: 'Share to Email',
        },
        {
            icon: <img src={icons.line} alt="" />,
            title: 'Share to LINE',
        },
        {
            icon: <img src={icons.kakaotalk} alt="" />,
            title: 'Share to Pinterest',
        },
    ];

    return (
        <HeadlessTippy
            interactive
            hideOnClick={false}
            placement="top"
            offset={offset}
            delay={[200, 500]}
            zIndex={99}
            render={(attrs) => (
                <div tabIndex={-1} {...attrs}>
                    <PopperWrapper className={cx('share-tab')}>
                        <div className={cx('share-wrapper')}>
                            {expanded
                                ? EXPANDED_SHARE_MENU.map((item, index) => {
                                      return (
                                          <div className={cx('share-item')} key={index}>
                                              {item.icon} {item.title}
                                          </div>
                                      );
                                  })
                                : SHARE_MENU.map((item, index) => {
                                      return (
                                          <div className={cx('share-item')} key={index}>
                                              {item.icon} {item.title}
                                          </div>
                                      );
                                  })}
                            {!expanded && (
                                <div className={cx('more-btn')} onClick={() => setExpanded(true)}>
                                    <ChevronDownIcon />
                                </div>
                            )}
                        </div>
                    </PopperWrapper>
                </div>
            )}
            onHide={() => setExpanded(false)}
        >
            <div>{children}</div>
        </HeadlessTippy>
    );
}

export default ShareAction;
