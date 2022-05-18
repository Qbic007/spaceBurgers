import style from "../profile.module.css";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import React, {ChangeEvent, useCallback, useState} from "react";
import {LOGIN} from "../../../services/actions/auth";
import {showErrorMessage} from "../../../services/API/base-request";
import {postLogin} from "../../../services/API/auth/login";
import PriceWithIcon from "../../../components/price-with-icon";
import OrderStructureItem from "../../../components/order-structure-item";

const PREVIOUS_PAGE = -1;

function OrdersPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [form, setValue] = useState({
        email: '',
        password: ''
    });

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue({...form, [e.target.name]: e.target.value});
    };

    const login = useCallback(
        e => {
            e.preventDefault();
            let result: any = false;
            postLogin(form).then(res => {
                result = res
            }).then(() => {
                if (result.success) {
                    dispatch({
                        type: LOGIN,
                        accessToken: result["accessToken"],
                        refreshToken: result["refreshToken"],
                    });
                    navigate(PREVIOUS_PAGE);
                } else {
                    showErrorMessage(result);
                }
            });
        },
        [navigate, dispatch, form]
    );

    return (
        <main className={`${style.formMain} text_type_main-medium`}>
            <div className={style.wrapper}>
                <section className={style.orderContainer}>
                    <h2 className={'text text_type_digits-default center-content'}>#034533</h2>
                    <h2 className={'text text_type_main-medium mt-10'}>Black Hole Singularity острый бургер</h2>
                    <div className={'text text_type_main-default mt-3 text_color_success'}>Выполнен</div>
                    <h2 className={'text text_type_main-medium mt-15'}>Состав:</h2>
                    <div className={style.orderStructureContainer}>
                        <OrderStructureItem
                            image={"../../../images/accepted.png"}
                            title={'Флюоресцентная булка R2-D3'}
                            price={'1 x 20'} />
                        <OrderStructureItem
                            image={"../../../images/accepted.png"}
                            title={'Филе Люминесцентного тетраодонтимформа'}
                            price={'1 x 300'} />
                        <OrderStructureItem
                            image={"../../../images/accepted.png"}
                            title={'Филе Люминесцентного тетраодонтимформа'}
                            price={'1 x 300'} />
                        <OrderStructureItem
                            image={"../../../images/accepted.png"}
                            title={'Филе Люминесцентного тетраодонтимформа'}
                            price={'1 x 300'} />
                        <OrderStructureItem
                            image={"../../../images/accepted.png"}
                            title={'Филе Люминесцентного тетраодонтимформа'}
                            price={'1 x 300'} />
                    </div>
                    <div className={style.orderFooterContainer}>
                        <div className={'text text_type_main-small text_color_inactive'}>Вчера, 13:50 i-GMT+3</div>
                        <PriceWithIcon price={'510'}/>
                    </div>
                </section>
            </div>
        </main>
    );
}

export default OrdersPage;
