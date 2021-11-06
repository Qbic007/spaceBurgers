import style from './burger-constructor.module.css';
import Ingredient from "./ingredient/ingredient";
import {Button, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import React from "react";
import OrderDetails from "../order-details/order-details";
import {useDispatch, useSelector} from 'react-redux';
import {SHOW_MODAL} from '../../services/actions/modal';
import {modalOrder} from "../../services/reducers/modal";

function BurgerConstructor() {
    const dispatch = useDispatch();

    const {isVisibleOrder} = useSelector(store => ({
        isVisibleOrder: store.modalReducer.isVisibleOrder
    }))

    const {ingredients, bun} = useSelector(store => ({
        ingredients: store.constructorReducer.ingredients,
        bun: store.constructorReducer.bun
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

    const countPrice = (bun, ingredients) => {
        return 2 * bun.price + ingredients.reduce((sum, ingredient) => sum + ingredient.price, 0);
    }

    return (
        ingredients.length > 0 ? <section className={`${style.constructorSection} mt-25`}>
            {isVisibleOrder && <OrderDetails/>}
            <div className={style.ingredientsContainer}>
                <div className={style.ingredientsOutsideContainer}>
                    <Ingredient type="top"
                                isLocked={true}
                                text={bun.name + " (верх)"}
                                price={bun.price}
                                thumbnail={bun.image}/>
                </div>
                <div className={style.ingredientsInsideContainer}>
                    {ingredients.map((object) => {
                        return (
                            <Ingredient key={object._id}
                                        text={object.name}
                                        price={object.price}
                                        thumbnail={object.image}/>
                        );
                    })}
                </div>
                <div className={style.ingredientsOutsideContainer}>
                    <Ingredient type="bottom"
                                isLocked={true}
                                text={bun.name + " (низ)"}
                                price={bun.price}
                                thumbnail={bun.image}/>
                </div>
            </div>
            <div className={style.order}>
                <span className={`${style.price} text text_type_main-large`}>
                    {countPrice(bun, ingredients)}
                    <CurrencyIcon type={"primary"}/>
                </span>
                <Button type="primary" size="large" onClick={showModal}>
                    Оформить заказ
                </Button>
            </div>
        </section> : null);
}

export default BurgerConstructor;