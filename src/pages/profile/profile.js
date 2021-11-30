import AppHeader, {MENU_ITEM_PROFILE} from "../../components/app-header/app-header";
import style from "./profile.module.css";
import {Input} from "@ya.praktikum/react-developer-burger-ui-components";
import {NavLink, useNavigate} from "react-router-dom";
import {makeLinkUrl, PATH_LOGIN, PATH_PROFILE} from "../../components/app/app";
import {useDispatch} from "react-redux";
import {useCallback, useEffect, useState} from "react";
import {LOG_OUT, LOGIN} from "../../services/actions/auth";
import {postLogOut} from "../../services/API/auth/logout";
import {ACCESS_TOKEN_ITEM_KEY, REFRESH_TOKEN_ITEM_KEY} from "../../services/reducers/auth";
import {consoleErrorMessage, showErrorMessage} from "../../services/API/base-request";
import {getUser} from "../../services/API/auth/user";
import {MESSAGE_TOKEN_EXPIRED, postToken} from "../../services/API/auth/token";
import {ProtectedPageNoAuth} from "../protected/protected-page-no-auth";

function ProfilePage() {
    let navigate = useNavigate();

    const dispatch = useDispatch();

    const [form, setValue] = useState({
        email: "",
        name: "",
        password: ""
    });

    useEffect(
        () => {
            let result = false;
            postToken().then(res => {
                result = res
            }).then(() => {
                if (result.success) {
                    dispatch({
                        type: LOGIN,
                        accessToken: result["accessToken"],
                        refreshToken: result["refreshToken"],
                    });
                } else {
                    consoleErrorMessage(result);
                    dispatch({type: LOG_OUT});
                    navigate(makeLinkUrl(PATH_LOGIN));
                }
            }).then(() => {
                    getUser(localStorage.getItem(ACCESS_TOKEN_ITEM_KEY)).then(res => {
                        result = res
                    }).then(() => {
                        if (result.success) {
                            setValue({
                                email: result["user"]["email"],
                                name: result["user"]["name"],
                                password: ""
                            });
                        } else if (result.message === MESSAGE_TOKEN_EXPIRED) {
                            getUser(localStorage.getItem(ACCESS_TOKEN_ITEM_KEY)).then(res => {
                                result = res
                            }).then(() => {
                                if (result.success) {
                                    setValue({
                                        email: result["user"]["email"],
                                        name: result["user"]["name"],
                                        password: ""
                                    });
                                } else {
                                    consoleErrorMessage(result);
                                }
                            });
                        } else {
                            consoleErrorMessage(result);
                        }
                    })
                }
            );
        }, [dispatch, navigate, setValue]
    );

    const onChange = e => {
        setValue({...form, [e.target.name]: e.target.value});
    };

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
                    dispatch({type: LOG_OUT});
                    navigate(makeLinkUrl(PATH_LOGIN));
                } else {
                    showErrorMessage(result)
                }
            });
        },
        [navigate, dispatch]
    );

    return (
        <ProtectedPageNoAuth>
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
                                        onChange={onChange}
                                        value={form.name}
                                        name={'name'}
                                        icon={'EditIcon'}
                                    />
                                </div>
                                <div className={'mt-6'}>
                                    <Input
                                        type={'text'}
                                        placeholder={'Логин'}
                                        onChange={onChange}
                                        value={form.email}
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
        </ProtectedPageNoAuth>
    );
}

export default ProfilePage;