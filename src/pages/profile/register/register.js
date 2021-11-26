import AppHeader, {MENU_ITEM_PROFILE} from "../../../components/app-header/app-header";
import style from "../profile.module.css";
import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link} from "react-router-dom";
import {makeLinkUrl, PATH_LOGIN} from "../../../components/app/app";

function Register() {
    return (
        <>
            <AppHeader activeMenuItem={MENU_ITEM_PROFILE}/>
            <main className={'text_type_main-default'}>
                <div className={style.wrapper}>
                    <span className={'mt-30'}>Регистрация</span>
                    <form className={style.formContainer}>
                        <div className={'mt-6'}>
                            <Input
                                type={'text'}
                                placeholder={'Имя'}
                                onChange={e => console.log(e.target.value)}
                                value={''}
                                name={'name'}
                            />
                        </div>
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
                                Зарегистрироваться
                            </Button>
                        </div>
                    </form>
                    <span className={'mt-6'}>
                        <span className={'mr-2'}>Уже зарегистрированы?</span>
                        <Link to={makeLinkUrl(PATH_LOGIN)}>Войти</Link>
                    </span>
                </div>
            </main>
        </>
    );
}

export default Register;