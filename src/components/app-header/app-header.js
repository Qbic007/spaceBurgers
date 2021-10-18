import style from './app-header.module.css';
import {Logo} from '@ya.praktikum/react-developer-burger-ui-components'
import MenuItem from "../menu-item/menu-item";

function AppHeader() {
    return (
        <header className={style.header}>
            <div className={style.wrapper}>
                <div className={style.menuBlockMenu}>
                    <ul className={style.menu}>
                        <li>
                            <MenuItem text={'конструктор'} icon='burger'/>
                        </li>
                        <li>
                            <MenuItem text={'лента заказов'} icon='list'/>
                        </li>
                    </ul>              
                </div>
                <div className={style.menuBlockLogo}>
                    <Logo/>                  
                </div>
                <div className={style.menuBlockProfile}>
                    <MenuItem text={'лента заказов'} icon='profile'/>             
                </div>
            </div>
        </header>
    );
}

export default AppHeader;
