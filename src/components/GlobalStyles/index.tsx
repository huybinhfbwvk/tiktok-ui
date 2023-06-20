import './GlobalStyles.scss';

interface GlobalStylesProps {
    children: React.ReactElement;
}
function GlobalStyles({ children }: GlobalStylesProps) {
    return children;
}

export default GlobalStyles;
