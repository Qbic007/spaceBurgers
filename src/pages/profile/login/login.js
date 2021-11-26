import AppHeader, {MENU_ITEM_PROFILE} from "../../../components/app-header/app-header";
import style from "../profile.module.css";
import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link} from "react-router-dom";
import {makeLinkUrl, PATH_FORGOT_PASSWORD, PATH_REGISTER} from "../../../components/app/app";

function Login() {
    return (
        <>
            <AppHeader activeMenuItem={MENU_ITEM_PROFILE}/>
            <main className={'text_type_main-medium'}>
                <div className={style.wrapper}>
                    <span className={'mt-30'}>Вход</span>
                    <form className={style.formContainer}>
                        <div className={'mt-6'}>
                            <Input
                                type={'text'}
                                placeholder={'E-mail'}
                                onChange={e => console.log(e.target.value)}
                                value={''}
                                name={'email'}
                            />
                        </div>
                        <div className={'mt-6'}>
                            <Input
                                type={'text'}
                                placeholder={'Пароль'}
                                onChange={e => console.log(e.target.value)}
                                value={''}
                                name={'password'}
                                icon={'HideIcon'}
                            />
                        </div>
                        <div className={'mt-6'}>
                            <Button type="primary" size="medium">
                                Войти
                            </Button>
                        </div>
                    </form>
                    <span className={`${style.additionalText} text_type_main-default mt-20`}>
                        <span className={'mr-2'}>Вы - новый пользователь?</span>
                        <Link to={makeLinkUrl(PATH_REGISTER)}>Зарегистрироваться</Link>
                    </span>
                    <span className={`${style.additionalText} text_type_main-default mt-6`}>
                        <span className={'mr-2'}>Забыли пароль?</span>
                        <Link to={makeLinkUrl(PATH_FORGOT_PASSWORD)}>Восстановить пароль</Link>
                    </span>
                </div>
            </main>
        </>
    );
}

export default Login;