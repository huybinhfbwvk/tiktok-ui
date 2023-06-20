import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './ScrollToTop.module.scss';

const cx = classNames.bind(styles);

function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Add a scroll event listener to show/hide the button
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            setIsVisible(scrollTop > 0);
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    if (!isVisible) {
        return null; // Render nothing if the button is not visible
    }

    return (
        <button className={cx('scroll-btn')} onClick={scrollToTop}>
            <FontAwesomeIcon icon={faChevronUp} />
        </button>
    );
}

export default ScrollToTop;
