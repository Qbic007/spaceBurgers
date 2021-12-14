import style from './menu-item.module.css';
import {BurgerIcon, ListIcon, ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import {Link} from "react-router-dom";

type Props = {
    icon: 'burger' | 'list' | 'profile';
    text: string;
    linkTo: string;
    isActive: boolean;
}

function MenuItem(props: Props) {
    const iconType = () => props.isActive ? 'primary' : 'secondary';

    const icon = (icon: 'burger' | 'list' | 'profile') => {
        const data = {
            burger: <BurgerIcon type={iconType()}/>,
            list: <ListIcon type={iconType()}/>,
            profile: <ProfileIcon type={iconType()}/>
        };
        return (
            <>
                {data[icon]}
            </>
        );
    };

    return (
        <Link to={props.linkTo}>
            <div className={style.menuItem}>
                {icon(props.icon)}
                <p className={`${style.itemText} ${props.isActive && style.isActive} text text_typeMain-default`}>
                    {props.text}
                </p>
            </div>
        </Link>
    );
}

export default MenuItem;
