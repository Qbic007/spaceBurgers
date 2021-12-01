import style from "../profile.module.css";
import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, useNavigate} from "react-router-dom";
import {makeLinkUrl, PATH_LOGIN, PATH_RESET_PASSWORD} from "../../../components/app/app";
import {useCallback, useState} from "react";
import {postPasswordReset} from "../../../services/API/password-reset";
import {showErrorMessage} from "../../../services/API/base-request";
import {ProtectedPageAuth} from "../../protected/protected-page-auth";

function ForgotPasswordPage() {
    let navigate = useNavigate();

    const [form, setValue] = useState({
        email: ''
    });

    const onChange = e => {
        setValue({...form, [e.target.name]: e.target.value});
    };

    const resetPassword = useCallback(
        e => {
            e.preventDefault();
            let result = false;
            postPasswordReset(form).then(res => {
                result = res
            }).then(() => {
                if (result.success) {
                    navigate(makeLinkUrl(PATH_RESET_PASSWORD));
                    alert('На указанную почту выслано письмо с инструкциями по восстановлению пароля');
                } else {
                    showErrorMessage(result);
                }
            });
        },
        [navigate, form]
    );

    return (
        <ProtectedPageAuth>
            <main className={`${style.formMain} text_type_main-medium`}>
                <div className={style.wrapper}>
                    <section className={style.profileFormContainer}>
                        <span className={'mt-30'}>Восстановление пароля</span>
                        <form className={style.profileForm} onClick={resetPassword}>
                            <div className={'mt-6'}>
                                <Input
                                    type={'text'}
                                    placeholder={'E-mail'}
                                    onChange={onChange}
                                    name={'email'}
                                    value={form.email}
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
        </ProtectedPageAuth>
    );
}

export default ForgotPasswordPage;