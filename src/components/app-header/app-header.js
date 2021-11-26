import style from './app-header.module.css';
import {Logo} from '@ya.praktikum/react-developer-burger-ui-components'
import MenuItem from "../menu-item/menu-item";
import {makeLinkUrl, PATH_CONSTRUCTOR, PATH_ORDERS, PATH_PROFILE} from "../app/app";

export const MENU_ITEM_CONSTRUCTOR = 0;
export const MENU_ITEM_ORDERS = 1;
export const MENU_ITEM_PROFILE = 2;

function AppHeader(props) {
    return (
        <header className={style.header}>
            <div className={style.wrapper}>
                <div className={style.menuBlockMenu}>
                    <ul className={style.menu}>
                        <li>
                            <MenuItem text={'конструктор'}
                                      icon='burger'
                                      linkTo={makeLinkUrl([PATH_CONSTRUCTOR])}
                                      isActive={props.activeMenuItem === MENU_ITEM_CONSTRUCTOR}/>
                        </li>
                        <li>
                            <MenuItem text={'лента заказов'}
                                      icon='list'
                                      linkTo={makeLinkUrl([PATH_ORDERS])}
                                      isActive={props.activeMenuItem === MENU_ITEM_ORDERS}/>
                        </li>
                    </ul>
                </div>
                <div className={style.menuBlockLogo}>
                    <Logo/>
                </div>
                <div className={style.menuBlockProfile}>
                    <MenuItem text={'личный кабинет'}
                              icon='profile'
                              linkTo={makeLinkUrl([PATH_PROFILE])}
                              isActive={props.activeMenuItem === MENU_ITEM_PROFILE}/>
                </div>
            </div>
        </header>
    );
}

export default AppHeader;
