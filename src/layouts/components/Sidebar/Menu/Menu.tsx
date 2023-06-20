interface MenuProps {
    children: React.ReactNode;
}

const Menu = ({ children }: MenuProps) => {
    return <nav>{children}</nav>;
};
export default Menu;
