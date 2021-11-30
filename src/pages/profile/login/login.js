import AppHeader, {MENU_ITEM_PROFILE} from "../../../components/app-header/app-header";
import style from "../profile.module.css";
import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, useNavigate} from "react-router-dom";
import {makeLinkUrl, PATH_CONSTRUCTOR, PATH_FORGOT_PASSWORD, PATH_REGISTER} from "../../../components/app/app";
import {useDispatch} from "react-redux";
import {useCallback, useState} from "react";
import {LOGIN} from "../../../services/actions/auth";
import {showErrorMessage} from "../../../services/API/base-request";
import {postLogin} from "../../../services/API/auth/login";
import {REFRESH_TOKEN_ITEM_KEY} from "../../../services/reducers/auth";
import {ProtectedPageAuth} from "../../protected/protected-page-auth";

function LoginPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [form, setValue] = useState({
        email: '',
        password: ''
    });

    const onChange = e => {
        setValue({...form, [e.target.name]: e.target.value});
    };

    const login = useCallback(
        e => {
            e.preventDefault();
            let result = false;
            postLogin(form).then(res => {
                result = res
            }).then(() => {
                if (result.success) {
                    dispatch({
                        type: LOGIN,
                        accessToken: result["accessToken"],
                        refreshToken: result["refreshToken"],
                    });
                } else {
                    showErrorMessage(result);
                }
            });
        },
        [dispatch, form]
    );

    if (localStorage.getItem(REFRESH_TOKEN_ITEM_KEY) !== null) {
        navigate(makeLinkUrl(PATH_CONSTRUCTOR));
    }

    return (
        <ProtectedPageAuth>
            <AppHeader activeMenuItem={MENU_ITEM_PROFILE}/>
            <main className={`${style.formMain} text_type_main-medium`}>
                <div className={style.wrapper}>
                    <section className={style.profileFormContainer}>
                        <span className={'mt-30'}>Вход</span>
                        <form className={style.profileForm}>
                            <div className={'mt-6'}>
                                <Input
                                    type={'text'}
                                    placeholder={'E-mail'}
                                    onChange={onChange}
                                    value={form.email}
                                    name={'email'}
                                />
                            </div>
                            <div className={'mt-6'}>
                                <Input
                                    type={'text'}
                                    placeholder={'Пароль'}
                                    onChange={onChange}
                                    value={form.password}
                                    name={'password'}
                                    icon={'HideIcon'}
                                />
                            </div>
                            <div className={'mt-6'}>
                                <Button type="primary" size="medium" onClick={login}>
                                    Войти
                                </Button>
                            </div>
                        </form>
                        <span className={`${style.additionalText} text_type_main-default mt-20`}>
                            <span className={'mr-2'}>Вы - новый пользователь?</span>
                            <Link className={style.linkText} to={makeLinkUrl(PATH_REGISTER)}>
                                Зарегистрироваться
                            </Link>
                        </span>
                        <span className={`${style.additionalText} text_type_main-default mt-6`}>
                        <span className={'mr-2'}>Забыли пароль?</span>
                            <Link className={style.linkText} to={makeLinkUrl(PATH_FORGOT_PASSWORD)}>
                                Восстановить пароль
                            </Link>
                        </span>
                    </section>
                </div>
            </main>
        </ProtectedPageAuth>
    );
}

export default LoginPage;