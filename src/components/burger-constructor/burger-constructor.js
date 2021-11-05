import style from './burger-constructor.module.css';
import Ingredient from "./ingredient/ingredient";
import {Button, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import React from "react";
import OrderDetails from "../order-details/order-details";
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import {CLOSE_MODAL, SHOW_MODAL} from '../../services/actions/modal';
import {modalOrder} from "../../services/reducers/modal";

function BurgerConstructor(props) {
    const dispatch = useDispatch();

    const {isVisibleOrder} = useSelector(store => ({
        isVisibleOrder: store.modalReducer.isVisibleOrder
    }))

    const showModal = () => {
        dispatch({type: SHOW_MODAL, modalType: modalOrder});
    }

    const closeModal = () => {
        dispatch({type: CLOSE_MODAL, modalType: modalOrder});
    }

    return (
        props.data.success ? <section className={`${style.constructorSection} mt-25`}>
            {isVisibleOrder && <OrderDetails order_id='034536' closeCallback={closeModal}/>}
            <div className={style.ingredientsContainer}>
                <div className={style.ingredientsOutsideContainer}>
                    <Ingredient type="top"
                                isLocked={true}
                                text={props.data.data[0].name + " (верх)"}
                                price={props.data.data[0].price}
                                thumbnail={props.data.data[0].image}/>
                </div>
                <div className={style.ingredientsInsideContainer}>
                    <Ingredient text={props.data.data[1].name}
                                price={props.data.data[1].price}
                                thumbnail={props.data.data[1].image}/>
                    <Ingredient text={props.data.data[2].name}
                                price={props.data.data[2].price}
                                thumbnail={props.data.data[2].image}/>
                    <Ingredient text={props.data.data[3].name}
                                price={props.data.data[3].price}
                                thumbnail={props.data.data[3].image}/>
                    <Ingredient text={props.data.data[4].name}
                                price={props.data.data[4].price}
                                thumbnail={props.data.data[4].image}/>
                    <Ingredient text={props.data.data[4].name}
                                price={props.data.data[4].price}
                                thumbnail={props.data.data[4].image}/>
                    <Ingredient text={props.data.data[4].name}
                                price={props.data.data[4].price}
                                thumbnail={props.data.data[4].image}/>
                    <Ingredient text={props.data.data[5].name}
                                price={props.data.data[5].price}
                                thumbnail={props.data.data[5].image}/>
                </div>
                <div className={style.ingredientsOutsideContainer}>
                    <Ingredient type="bottom"
                                isLocked={true}
                                text={props.data.data[0].name + " (низ)"}
                                price={props.data.data[0].price}
                                thumbnail={props.data.data[0].image}/>
                </div>
            </div>
            <div className={style.order}>
                <span className={`${style.price} text text_type_main-large`}>
                    610
                    <CurrencyIcon type={"primary"}/>
                </span>
                <Button type="primary" size="large" onClick={showModal}>
                    Оформить заказ
                </Button>
            </div>
        </section> : null);
}

export default BurgerConstructor;

BurgerConstructor.propTypes = {
    data: PropTypes.object,
};