import style from './app-header.module.css';
import {Logo} from '@ya.praktikum/react-developer-burger-ui-components'
import MenuItem from "../menu-item/menu-item";
import {
    makeLinkUrl,
    PATH_CONSTRUCTOR,
    PATH_FORGOT_PASSWORD,
    PATH_INGREDIENTS,
    PATH_LOGIN,
    PATH_ORDERS,
    PATH_PROFILE,
    PATH_REGISTER,
    PATH_RESET_PASSWORD
} from "../app/app";
import {useLocation} from "react-router-dom";

export const MENU_ITEM_CONSTRUCTOR = 0;
export const MENU_ITEM_ORDERS = 1;
export const MENU_ITEM_PROFILE = 2;

function AppHeader() {
    const PATH_TO_MENU_ITEM_MAPPING = {
        [makeLinkUrl(PATH_CONSTRUCTOR)]: MENU_ITEM_CONSTRUCTOR,
        [makeLinkUrl(PATH_LOGIN)]: MENU_ITEM_PROFILE,
        [makeLinkUrl(PATH_REGISTER)]: MENU_ITEM_PROFILE,
        [makeLinkUrl(PATH_FORGOT_PASSWORD)]: MENU_ITEM_PROFILE,
        [makeLinkUrl(PATH_RESET_PASSWORD)]: MENU_ITEM_PROFILE,
        [makeLinkUrl(PATH_PROFILE)]: MENU_ITEM_PROFILE,
        [makeLinkUrl(PATH_INGREDIENTS)]: MENU_ITEM_CONSTRUCTOR,
        [makeLinkUrl(PATH_ORDERS)]: MENU_ITEM_ORDERS,
    };
    
    const {pathname} = useLocation();
    const getActiveMenuItem = () => {
        return PATH_TO_MENU_ITEM_MAPPING[pathname] ? PATH_TO_MENU_ITEM_MAPPING[pathname] : MENU_ITEM_CONSTRUCTOR;
    };
    const activeMenuItem = getActiveMenuItem();
    return (
        <header className={style.header}>
            <div className={style.wrapper}>
                <div className={style.menuBlockMenu}>
                    <ul className={style.menu}>
                        <li>
                            <MenuItem text={'конструктор'}
                                      icon='burger'
                                      linkTo={makeLinkUrl([PATH_CONSTRUCTOR])}
                                      isActive={activeMenuItem === MENU_ITEM_CONSTRUCTOR}/>
                        </li>
                        <li>
                            <MenuItem text={'лента заказов'}
                                      icon='list'
                                      linkTo={makeLinkUrl([PATH_ORDERS])}
                                      isActive={activeMenuItem === MENU_ITEM_ORDERS}/>
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
                              isActive={activeMenuItem === MENU_ITEM_PROFILE}/>
                </div>
            </div>
        </header>
    );
}

export default AppHeader;
