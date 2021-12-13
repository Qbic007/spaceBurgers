import style from "../profile.module.css";
import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, useNavigate} from "react-router-dom";
import {makeLinkUrl, PATH_FORGOT_PASSWORD, PATH_LOGIN, PATH_PROFILE} from "../../../components/app/app";
import {ChangeEvent, useCallback, useEffect, useState} from "react";
import {postPasswordResetReset} from "../../../services/API/password-reset";
import {showErrorMessage} from "../../../services/API/base-request";
import {ProtectedPageAuth} from "../../protected/protected-page-auth";
import {useSelector} from "react-redux";

interface LocationReducer {
    prevLocationPath: string,
    currentLocationPath: string,
}

interface Store {
    locationReducer: LocationReducer;
}

function ResetPasswordPage() {
    const {prevLocationPath, currentLocationPath} = useSelector((store: Store) => ({
        prevLocationPath: store.locationReducer.prevLocationPath,
        currentLocationPath: store.locationReducer.currentLocationPath,
    }));

    const navigate = useNavigate();

    const [form, setValue] = useState({
        password: '',
        token: ''
    });

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue({...form, [e.target.name]: e.target.value});
    };

    const resetPassword = useCallback(
        e => {
            e.preventDefault();
            let result = false;
            postPasswordResetReset(form).then(res => {
                result = res
            }).then(() => {
                if (result.success) {
                    navigate(makeLinkUrl(PATH_PROFILE));
                    alert('Пароль успешно изменён');
                } else {
                    showErrorMessage(result);
                }
            });
        },
        [navigate, form]
    );

    useEffect(
        () => {
            console.log(prevLocationPath);
            console.log(makeLinkUrl(PATH_FORGOT_PASSWORD));
            if (prevLocationPath !== makeLinkUrl(PATH_FORGOT_PASSWORD)
                && currentLocationPath !== makeLinkUrl(PATH_FORGOT_PASSWORD)) {
                navigate(makeLinkUrl(PATH_FORGOT_PASSWORD));
            }
        }, [prevLocationPath, navigate]
    );

    return (
        <ProtectedPageAuth>
            <main className={`${style.formMain} text_type_main-medium`}>
                <div className={style.wrapper}>
                    <section className={style.profileFormContainer}>
                        <span className={'mt-30'}>Восстановление пароля</span>
                        <form className={style.profileForm} onSubmit={resetPassword}>
                            <div className={'mt-6'}>
                                <Input
                                    type={'text'}
                                    placeholder={'Введите новый пароль'}
                                    onChange={onChange}
                                    value={form.password}
                                    name={'password'}
                                    icon={'HideIcon'}
                                />
                            </div>
                            <div className={'mt-6'}>
                                <Input
                                    type={'text'}
                                    placeholder={'Введите код из письма'}
                                    onChange={onChange}
                                    value={form.token}
                                    name={'token'}
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
                            <Link className={style.linkText} to={makeLinkUrl(PATH_LOGIN)}>Войти</Link>
                        </span>
                    </section>
                </div>
            </main>
        </ProtectedPageAuth>
    );
}

export default ResetPasswordPage;