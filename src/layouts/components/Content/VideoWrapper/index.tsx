import classNames from 'classnames/bind';
import Button from '~/components/Button';
import Image from '~/components/Image';
import styles from './VideoWrapper.module.scss';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import { faBookmark, faCheckCircle, faCommentDots, faHeart, faMusic, faShare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext, useEffect, useRef, useState } from 'react';
import * as videosService from '~/services/videosServices';
import ShareAction from '~/components/ShareActions';
import Tippy from '@tippyjs/react/headless';
import { FlagIcon, PauseIcon, MutedIcon, PlaySolidIcon, VolumeIcon } from '~/components/Icons';
import { ModalContext } from '~/components/ModalProvider';
import AccountRender from '~/components/AccountRender';

const cx = classNames.bind(styles);

interface Video {
    id: string;
    title: string;
    file_url: string;
    avatar: string;
    first_name: string;
    last_name: string;
    full_name: string;
    tick: boolean;
    nickname: string;
    music: string;
    description: string;
    likes_count: number;
    followers_count: number;
    comments_count: number;
    shares_count: number;
    views_count: number;
    user: Video;
}

interface VideoWrapperProps {
    data?: any;
    mute?: boolean;
    volume?: number;
    adjustVolume?: (volume: number) => void;
    toggleMuted?: () => void;
}

function VideoWrapper({ data, mute, adjustVolume }: VideoWrapperProps) {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const context = useContext(ModalContext);

    const [videos, setVideos] = useState<Video[]>([]);
    const [page, setPage] = useState(1);
    const [volume, setVolume] = useState(0.45);
    const [muted, setMuted] = useState(false);

    useEffect(() => {
        videosService
            .getVideoList({ type: 'for-you', page: 2 })
            .then((data) => {
                setVideos(data);
            })
            .catch((error) => console.log(error));
    }, []);

    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        if (mute) {
            //videoRef.current?.volume = 0;
        } else {
            //videoRef.current?.volume = volume;
        }
    }, [mute, volume]);

    const playVideo = () => {
        if (isPlaying === false) {
            videoRef.current?.play();
            setIsPlaying(true);
        }
    };

    const pauseVideo = () => {
        if (isPlaying === true) {
            videoRef.current?.pause();
            setIsPlaying(false);
        }
    };

    const togglePlayVideo = () => {
        if (isPlaying === false) {
            playVideo();
        } else {
            pauseVideo();
        }
    };

    function playVideoInViewport() {
        var bounding = videoRef.current?.getBoundingClientRect();

        if (
            bounding &&
            bounding.top >= 0 &&
            bounding.left >= 0 &&
            bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
            bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        ) {
            playVideo();
        } else {
            pauseVideo();
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    function handleScroll() {
        if (window.scrollY + window.innerHeight >= document.body.offsetHeight) {
            setPage((page) => page + 1);
        }
    }

    const handleAdjustVolume = (e: any) => {
        setVolume(e.target.value / 100);
        if (volume > 0) {
            setMuted(false);
        }
    };

    const toggleMuted = () => {
        if (muted) {
            setVolume(0.4);
            setMuted(false);
        } else {
            setVolume(0);
            setMuted(true);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('video-display')}>
                {videos.map((video) => (
                    <li key={video.id}>
                        <div className={cx('container')}>
                            <a href="">
                                <Image className={cx('img')} src={video.user.avatar} />
                            </a>
                            <div className={cx('video-content')}>
                                <div className={cx('main-content')}>
                                    <div className={cx('title-content')}>
                                        <Tippy
                                            interactive
                                            animation={false}
                                            delay={[800, 0]}
                                            placement="bottom-start"
                                            render={(props: any) => (
                                                <div tabIndex={-1} {...props}>
                                                    <PopperWrapper className={cx('preview')}>
                                                        <AccountRender video={video} />
                                                    </PopperWrapper>
                                                </div>
                                            )}
                                        >
                                            <a className={cx('title-content__wrap')} href="">
                                                <h3>{video.user.nickname}</h3>
                                                <h4>{`${video.user.first_name} ${video.user.last_name}`}</h4>
                                            </a>
                                        </Tippy>
                                    </div>
                                    <p className={cx('btn')}>
                                        <Button small outline>
                                            Follow
                                        </Button>
                                    </p>

                                    <div className={cx('caption-content')}>
                                        <span>{video.description}</span>
                                        <a href="">
                                            <strong>#genzmusic</strong>
                                        </a>
                                        <a href="">
                                            <strong>#fyp</strong>
                                        </a>
                                        <a href="">
                                            <strong>#xuhuong</strong>
                                        </a>
                                        <a href="">
                                            <strong>#Tiktokgiaitri</strong>
                                        </a>
                                        <a href="">
                                            <strong>#longervideo</strong>
                                        </a>
                                    </div>
                                    <h4 className={cx('song-content')}>
                                        <a href="">
                                            <FontAwesomeIcon icon={faMusic} />
                                            <span>{video.music}</span>
                                        </a>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className={cx('video')}>
                            <video src={video.file_url} className={cx('video-play')}></video>

                            <div className={cx('control-play')} onClick={togglePlayVideo}>
                                {isPlaying ? <PauseIcon /> : <PlaySolidIcon />}
                            </div>

                            <div className={cx('control-volume', { active: mute })}>
                                <div className={cx('container')}>
                                    <input
                                        type="range"
                                        min="0"
                                        max="100"
                                        step="1"
                                        //onChange={adjustVolume}
                                        //value={volume * 100}
                                    />
                                </div>

                                <div className={cx('volume-icon')} onClick={toggleMuted}>
                                    {mute ? <MutedIcon /> : <VolumeIcon />}
                                </div>
                            </div>

                            <div className={cx('report')}>
                                <FlagIcon /> Report
                            </div>

                            <div className={cx('video-nav')}>
                                <button>
                                    <span>
                                        <FontAwesomeIcon icon={faHeart} />
                                    </span>
                                    <strong>{video.likes_count}</strong>
                                </button>
                                <button>
                                    <span>
                                        <FontAwesomeIcon icon={faCommentDots} />
                                    </span>
                                    <strong>{video.comments_count}</strong>
                                </button>
                                <button>
                                    <span>
                                        <FontAwesomeIcon icon={faBookmark} />
                                    </span>
                                    <strong>{video.shares_count}</strong>
                                </button>
                                <ShareAction offset={[90, 0]}>
                                    <button>
                                        <span>
                                            <FontAwesomeIcon icon={faShare} />
                                        </span>
                                        <strong>{video.views_count}</strong>
                                    </button>
                                </ShareAction>
                            </div>
                        </div>
                    </li>
                ))}
            </div>
        </div>
    );
}

export default VideoWrapper;
