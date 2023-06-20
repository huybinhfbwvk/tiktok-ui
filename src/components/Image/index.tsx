import { forwardRef, useState, ImgHTMLAttributes, Ref } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import images from '~/assets/img';
import styles from './Image.module.scss';

const cx = classNames.bind(styles);

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  fallback?: string;
}

const Image = forwardRef<HTMLImageElement, ImageProps>(
  ({ src, alt, className, fallback: customFallback = images.noImage, ...props }, ref) => {
    const [fallback, setFallback] = useState<string>('');

    const handleError = () => {
      setFallback(customFallback);
    };

    return (
      <img
        className={cx(styles.wrapper, className)}
        ref={ref}
        src={fallback || src}
        alt={alt}
        {...props}
        onError={handleError}
      />
    );
  }
);

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    fallback: PropTypes.string,
};

export default Image;
