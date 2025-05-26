import { Link } from 'react-router-dom';

type NavItemType = 'section' | 'link';

interface NavItemProps {
    href: string;
    text: string;
    type: NavItemType;
}

export const NavItem = ({ href, text, type }: NavItemProps) => {
    const commonClass =
        'duration-300 font-medium ease-linear hover:text-primary py-3';

    if (type === 'link') {
        return <Link to={href} className={commonClass}>{text}</Link>;
    }

    return <a href={href} className={commonClass}>{text}</a>;
};
