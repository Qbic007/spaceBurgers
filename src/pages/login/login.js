import AppHeader from "../../components/app-header/app-header";
import style from "./login.module.css";
import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link} from "react-router-dom";

export const draggableTypeAddIngredient = 'addIngredient';
export const draggableTypeMoveIngredient = 'moveIngredient';

function Login() {
    return (
        <>
            <AppHeader/>
            <main className={'text_type_main-default'}>
                <div className={style.wrapper}>
                    <span className={'mt-30'}>Вход</span>
                    <form>
                        <div className={'mt-4'}>
                            <Input
                                type={'text'}
                                placeholder={'E-mail'}
                                onChange={e => console.log(e.target.value)}
                                value={''}
                                name={'email'}
                            />
                        </div>
                        <div className={'mt-4'}>
                            <Input
                                type={'text'}
                                placeholder={'Пароль'}
                                onChange={e => console.log(e.target.value)}
                                value={''}
                                name={'password'}
                                icon={'HideIcon'}
                            />
                        </div>
                        <input type={'submit'} value={'Войти'}/>
                        <Button type="primary" size="medium">
                            Нажми на меня
                        </Button>
                    </form>
                    <span className={'mt-10'}>
                        <span className={'mr-2'}>Вы - новый пользователь?</span>
                        <Link to={`/register`}>Зарегистрироваться</Link>
                    </span>
                    <span className={'mt-4'}>
                        <span className={'mr-2'}>Забыли пароль?</span>
                        <Link to={`/forgot-password`}>Восстановить пароль</Link>
                    </span>
                </div>
            </main>
        </>
    );
}

export default Login;