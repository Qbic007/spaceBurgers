import style from './menu-item.module.css';
import {BurgerIcon, ListIcon, ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function MenuItem(props) {
    const iconType = () => props.isActive ? 'primary' : 'secondary';

    const icon = (icon) => {
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

MenuItem.propTypes = {
    icon: PropTypes.string,
    text: PropTypes.string,
};
