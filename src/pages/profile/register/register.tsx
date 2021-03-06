import style from "../profile.module.css";
import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, useNavigate} from "react-router-dom";
import {makeLinkUrl, PATH_CONSTRUCTOR, PATH_LOGIN} from "../../../components/app/app";
import {ChangeEvent, useCallback, useState} from "react";
import {postRegistration} from "../../../services/API/auth/registration";
import {useDispatch} from "react-redux";
import {LOGIN} from "../../../services/actions/auth";
import {showErrorMessage} from "../../../services/API/base-request";
import {REFRESH_TOKEN_ITEM_KEY} from "../../../services/reducers/auth";
import {ProtectedPageAuth} from "../../protected/protected-page-auth";

function RegisterPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [form, setValue] = useState({
        name: '',
        email: '',
        password: ''
    });

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue({...form, [e.target.name]: e.target.value});
    };

    const register = useCallback(
        e => {
            e.preventDefault();
            let result: any = false;
            postRegistration(form).then(res => {
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
            <main className={`${style.formMain} text_type_main-medium`}>
                <div className={style.wrapper}>
                    <section className={style.profileFormContainer}>
                        <span className={'mt-30'}>??????????????????????</span>
                        <form className={style.profileForm} onSubmit={register}>
                            <div className={'mt-6'}>
                                <Input
                                    type={'text'}
                                    placeholder={'??????'}
                                    onChange={onChange}
                                    value={form.name}
                                    name={'name'}
                                />
                            </div>
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
                                    placeholder={'????????????'}
                                    onChange={onChange}
                                    value={form.password}
                                    name={'password'}
                                    icon={'HideIcon'}
                                />
                            </div>
                            <div className={'mt-6'}>
                                <Button type="primary" size="medium">
                                    ????????????????????????????????????
                                </Button>
                            </div>
                        </form>
                        <span className={`${style.additionalText} text_type_main-default mt-20`}>
                        <span className={'mr-2'}>?????? ?????????????????????????????????</span>
                            <Link className={style.linkText} to={makeLinkUrl(PATH_LOGIN)}>??????????</Link>
                        </span>
                    </section>
                </div>
            </main>
        </ProtectedPageAuth>
    );
}

export default RegisterPage;