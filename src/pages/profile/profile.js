import AppHeader, {MENU_ITEM_PROFILE} from "../../components/app-header/app-header";
import style from "./profile.module.css";
import {Input} from "@ya.praktikum/react-developer-burger-ui-components";
import {NavLink, useNavigate} from "react-router-dom";
import {makeLinkUrl, PATH_LOGIN, PATH_PROFILE} from "../../components/app/app";
import {useDispatch, useSelector} from "react-redux";
import {useCallback} from "react";
import {LOG_OUT} from "../../services/actions/auth";
import {postLogOut} from "../../services/API/auth/log-out";
import {REFRESH_TOKEN_ITEM_KEY} from "../../services/reducers/auth";
import {showErrorMessage} from "../../services/API/base-request";

function ProfilePage() {
    let navigate = useNavigate();
    const {user} = useSelector(store => ({
        user: store.authReducer.user
    }));

    const dispatch = useDispatch();

    const logOut = useCallback(
        e => {
            e.preventDefault();
            let result = false;
            postLogOut({
                token: localStorage.getItem(REFRESH_TOKEN_ITEM_KEY)
            }).then(res => {
                result = res
            }).then(() => {
                if (result.success) {
                    dispatch({
                        type: LOG_OUT
                    });
                    navigate(makeLinkUrl(PATH_LOGIN));
                } else {
                    showErrorMessage(result)
                }
            });
        },
        [dispatch]
    );

    return (
        <>
            <AppHeader activeMenuItem={MENU_ITEM_PROFILE}/>
            <main className={`${style.formMain} text_type_main-medium`}>
                <div className={style.wrapper}>
                    <div className={`${style.profileContainer} mt-30`}>
                        <section className={`${style.profileNavContainer} ${style.fullWidth}`}>
                            <ul className={style.profileMenuContainer}>
                                <li className={`${style.profileMenuItem} ${style.isActive}`}>
                                    <NavLink to={makeLinkUrl(PATH_PROFILE)}>Профиль</NavLink>
                                </li>
                                <li className={style.profileMenuItem}>История заказов</li>
                                <li className={style.profileMenuItem} onClick={logOut}>Выход</li>
                            </ul>
                            <span className={'pt-20 text_type_main-default'}>
                                В этом разделе вы можете изменить свои персональные данные
                            </span>
                        </section>
                        <section className={`${style.profileFormContainer} ${style.fullWidth}`}>
                            <form className={style.profileForm}>
                                <div className={'mt-6'}>
                                    <Input
                                        type={'text'}
                                        placeholder={'Имя'}
                                        onChange={e => console.log(e.target.value)}
                                        value={user.name}
                                        name={'name'}
                                        icon={'EditIcon'}
                                    />
                                </div>
                                <div className={'mt-6'}>
                                    <Input
                                        type={'text'}
                                        placeholder={'Логин'}
                                        onChange={e => console.log(e.target.value)}
                                        value={user.email}
                                        name={'login'}
                                        icon={'EditIcon'}
                                    />
                                </div>
                                <div className={'mt-6'}>
                                    <Input
                                        type={'text'}
                                        placeholder={'Пароль'}
                                        onChange={e => console.log(e.target.value)}
                                        value={''}
                                        name={'password'}
                                        icon={'EditIcon'}
                                    />
                                </div>
                            </form>
                        </section>
                        <section className={style.fullWidth}>
                        </section>
                    </div>
                </div>
            </main>
        </>
    );
}

export default ProfilePage;