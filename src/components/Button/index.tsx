import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

type ButtonProps = {
    to?: string;
    href?: string;
    primary?: boolean;
    outline?: boolean;
    text?: boolean;
    disabled?: boolean;
    rounded?: boolean;
    small?: boolean;
    large?: boolean;
    long?: boolean;
    getAppbtncustom?: boolean;
    getAppOnClickBtnCustom?: boolean;
    children?: React.ReactNode;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function Button({
    to,
    href,
    primary = false,
    outline = false,
    text = false,
    disabled = false,
    rounded = false,
    small = false,
    large = false,
    long = false,
    getAppbtncustom = false,
    getAppOnClickBtnCustom = false,
    children,
    leftIcon,
    rightIcon,
    onClick,
    ...passProps
}: ButtonProps) {
    let Comp: React.ElementType = 'button';

    const props: ButtonProps = {
        onClick,
        ...passProps,
    };

    // if (disabled) {
    // }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    const classes = cx('wrapper', {
        primary,
        outline,
        text,
        disabled,
        rounded,
        small,
        large,
        long,
        getAppbtncustom,
        getAppOnClickBtnCustom,
        leftIcon,
        rightIcon,
    });

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}
export default Button;
