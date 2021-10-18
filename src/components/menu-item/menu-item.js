import style from './menu-item.module.css';
import {BurgerIcon, ListIcon, ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components'

function MenuItem(props) {
    return (
        <div className={style.menuItem}>
            {icon(props.icon)}
            <p className={style.itemText + " text text_type_main-default"}>
                {props.text}
            </p>
        </div>
    );
}

const icon = (icon) => {
    const data = {
        burger: <BurgerIcon type={'primary'}/>,
        list: <ListIcon type={'primary'}/>,
        profile: <ProfileIcon type={'primary'}/>
    };
    return (
        <>
        {data[icon]}
        </>
    );
};

export default MenuItem;
