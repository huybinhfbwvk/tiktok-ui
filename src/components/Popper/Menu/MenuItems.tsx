import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

export interface MenuItemProps {
    data: {
        icon: JSX.Element;
        to?: string;
        title: string;
        separate?: boolean;
    };
    onClick?: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ data, onClick }) => {
    const classes = cx('menu-item', {
        separate: data.separate,
    });
    return (
        <Button className={classes} leftIcon={data.icon} to={data.to} onClick={onClick}>
            {data.title}
        </Button>
    );
};

export default MenuItem;
