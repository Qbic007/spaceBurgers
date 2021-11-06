import style from './burger-constructor.module.css';
import Ingredient from "./ingredient/ingredient";
import {Button, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import React from "react";
import OrderDetails from "../order-details/order-details";
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import {SHOW_MODAL} from '../../services/actions/modal';
import {modalOrder} from "../../services/reducers/modal";

function BurgerConstructor(props) {
    const dispatch = useDispatch();

    const {isVisibleOrder} = useSelector(store => ({
        isVisibleOrder: store.modalReducer.isVisibleOrder
    }))

    const {ingredients} = useSelector(store => ({
        ingredients: store.ingredientsReducer.ingredients
    }))
    
    const showModal = () => {
        dispatch({
            type: SHOW_MODAL,
            modalType: modalOrder,
            orderInfo: {
                order_id: '034536'
            }
        });
    }

    return (
        ingredients.length > 0 ? <section className={`${style.constructorSection} mt-25`}>
            {isVisibleOrder && <OrderDetails/>}
            <div className={style.ingredientsContainer}>
                <div className={style.ingredientsOutsideContainer}>
                    <Ingredient type="top"
                                isLocked={true}
                                text={ingredients[0].name + " (верх)"}
                                price={ingredients[0].price}
                                thumbnail={ingredients[0].image}/>
                </div>
                <div className={style.ingredientsInsideContainer}>
                    <Ingredient text={ingredients[1].name}
                                price={ingredients[1].price}
                                thumbnail={ingredients[1].image}/>
                    <Ingredient text={ingredients[2].name}
                                price={ingredients[2].price}
                                thumbnail={ingredients[2].image}/>
                    <Ingredient text={ingredients[3].name}
                                price={ingredients[3].price}
                                thumbnail={ingredients[3].image}/>
                    <Ingredient text={ingredients[4].name}
                                price={ingredients[4].price}
                                thumbnail={ingredients[4].image}/>
                    <Ingredient text={ingredients[4].name}
                                price={ingredients[4].price}
                                thumbnail={ingredients[4].image}/>
                    <Ingredient text={ingredients[4].name}
                                price={ingredients[4].price}
                                thumbnail={ingredients[4].image}/>
                    <Ingredient text={ingredients[5].name}
                                price={ingredients[5].price}
                                thumbnail={ingredients[5].image}/>
                </div>
                <div className={style.ingredientsOutsideContainer}>
                    <Ingredient type="bottom"
                                isLocked={true}
                                text={ingredients[0].name + " (низ)"}
                                price={ingredients[0].price}
                                thumbnail={ingredients[0].image}/>
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