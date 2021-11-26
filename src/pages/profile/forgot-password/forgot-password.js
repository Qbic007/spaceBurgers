import AppHeader, {MENU_ITEM_PROFILE} from "../../../components/app-header/app-header";
import style from "../profile.module.css";
import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link} from "react-router-dom";
import {makeLinkUrl, PATH_LOGIN} from "../../../components/app/app";

function ForgotPassword() {
    return (
        <>
            <AppHeader activeMenuItem={MENU_ITEM_PROFILE}/>
            <main className={`${style.formMain} text_type_main-medium`}>
                <div className={style.wrapper}>
                    <section className={style.profileFormContainer}>
                        <span className={'mt-30'}>Восстановление пароля</span>
                        <form className={style.profileForm}>
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
                                <Button type="primary" size="medium">
                                    Восстановить
                                </Button>
                            </div>
                        </form>
                        <span className={`${style.additionalText} text_type_main-default mt-20`}>
                            <span className={'mr-2'}>Вспомнили пароль?</span>
                            <Link className={style.linkText} to={makeLinkUrl(PATH_LOGIN)}>Войти</Link>
                        </span>
                    </section>
                </div>
            </main>
        </>
    );
}

export default ForgotPassword;