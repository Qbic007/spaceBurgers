import AppHeader, {MENU_ITEM_PROFILE} from "../../../components/app-header/app-header";
import style from "../profile.module.css";
import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link} from "react-router-dom";
import {makeLinkUrl, PATH_LOGIN} from "../../../components/app/app";

function ForgotPassword() {
    return (
        <>
            <AppHeader activeMenuItem={MENU_ITEM_PROFILE}/>
            <main className={'text_type_main-medium'}>
                <div className={style.wrapper}>
                    <span className={'mt-30'}>Восстановление пароля</span>
                    <form className={style.formContainer}>
                        <div className={'mt-6'}>
                            <Input
                                type={'text'}
                                placeholder={'Введите новый пароль'}
                                onChange={e => console.log(e.target.value)}
                                value={''}
                                name={'newPassword'}
                                icon={'HideIcon'}
                            />
                        </div>
                        <div className={'mt-6'}>
                            <Input
                                type={'text'}
                                placeholder={'Введите код из письма'}
                                onChange={e => console.log(e.target.value)}
                                value={''}
                                name={'code'}
                            />
                        </div>
                        <div className={'mt-6'}>
                            <Button type="primary" size="medium">
                                Сохранить
                            </Button>
                        </div>
                    </form>
                    <span className={`${style.additionalText} text_type_main-default mt-20`}>
                        <span className={'mr-2'}>Вспомнили пароль?</span>
                        <Link to={makeLinkUrl(PATH_LOGIN)}>Войти</Link>
                    </span>
                </div>
            </main>
        </>
    );
}

export default ForgotPassword;