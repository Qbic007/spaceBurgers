import style from "./orders.module.css";
import React, {useCallback} from "react";
import {NavLink, useNavigate} from "react-router-dom";
import {makeLinkUrl, makeOrdersLinkUrl, PATH_LOGIN, PATH_PROFILE} from "../../../components/app/app";
import {ProtectedPageNoAuth} from "../../protected/protected-page-no-auth";
import {postLogOut} from "../../../services/API/auth/logout";
import {REFRESH_TOKEN_ITEM_KEY} from "../../../services/reducers/auth";
import {LOG_OUT} from "../../../services/actions/auth";
import {showErrorMessage} from "../../../services/API/base-request";
import {useDispatch} from "react-redux";
import OrderList from "../../../components/order-list/order-list";

function OrdersPage() {
    let navigate = useNavigate();

    const dispatch = useDispatch();

    const logOut = useCallback(
        e => {
            e.preventDefault();
            let result: any = false;
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
            <main className={`${style.formMain} text_type_main-medium`}>
                <div className={style.wrapper}>
                    <div className={`${style.profileContainer} mt-30`}>
                        <section className={`${style.profileNavContainer} ${style.fullWidth}`}>
                            <ul className={style.profileMenuContainer}>
                                <li className={`${style.profileMenuItem} ${style.isActive}`}>
                                    <NavLink to={makeLinkUrl(PATH_PROFILE)}>Профиль</NavLink>
                                </li>
                                <li className={style.profileMenuItem}>
                                    <NavLink to={makeOrdersLinkUrl()}>
                                        История заказов
                                    </NavLink>
                                </li>
                                <li className={style.profileMenuItem} onClick={logOut}>Выход</li>
                            </ul>
                            <span className={'pt-20 text_type_main-default'}>
                                В этом разделе вы можете<br/>
                                посмотреть свою историю заказов
                            </span>
                        </section>
                        <section className={`${style.orderContainer} ${style.fullWidth}`}>
                            <OrderList />
                        </section>
                    </div>
                </div>
            </main>
        </ProtectedPageNoAuth>
    );
}

export default OrdersPage;
