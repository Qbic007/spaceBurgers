import style from './burger-constructor.module.css';
import Ingredient from "./ingredient/ingredient";
import {Button, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import React from "react";
import OrderDetails from "../order-details/order-details";
import {useDispatch, useSelector} from 'react-redux';
import {CLOSE_MODAL, SHOW_MODAL} from '../../services/actions/modal';
import {modalOrder} from "../../services/reducers/modal";
import {ADD_INGREDIENT, orderConfirmation} from "../../services/actions/constructor";
import {useDrop} from "react-dnd";
import {draggable_type} from "../app/app";
import Modal from "../modal/modal";

function BurgerConstructor() {
    const dispatch = useDispatch();

    const closeModal = () => {
        dispatch({type: CLOSE_MODAL});
    }

    const [, dropTarget] = useDrop({
        accept: draggable_type,
        drop(item) {
            dispatch({
                type: ADD_INGREDIENT,
                item: item
            });
        },
    });

    const {isVisibleOrder} = useSelector(store => ({
        isVisibleOrder: store.modalReducer.isVisibleOrder
    }))

    const {ingredients, bun, orderNumber} = useSelector(store => ({
        ingredients: store.constructorReducer.ingredients,
        bun: store.constructorReducer.bun,
        orderNumber: store.constructorReducer.orderNumber
    }))

    const getIngredientIds = (bun, ingredients) => {
        ingredients = ingredients.map(function (ingredient) {
            return ingredient._id;
        });
        ingredients.push(bun._id);
        ingredients.push(bun._id);
        return ingredients;
    }

    const offerConfirmation = () => {
        dispatch(orderConfirmation(getIngredientIds(bun, ingredients)));
        dispatch({
            type: SHOW_MODAL,
            modalType: modalOrder
        });
    }

    const countPrice = (bun, ingredients) => {
        return 2 * bun.price + ingredients.reduce((sum, ingredient) => sum + ingredient.price, 0);
    }

    return (
        <section
            ref={dropTarget}
            className={`${style.constructorSection} mt-25`}>
            {isVisibleOrder && orderNumber && <Modal closeModal={closeModal}>
                <OrderDetails/>
            </Modal>}
            <div className={style.ingredientsContainer}>
                {bun && <div className={style.ingredientsOutsideContainer}>
                    <Ingredient type="top"
                                isLocked={true}
                                text={bun.name + " (верх)"}
                                price={bun.price}
                                thumbnail={bun.image}/>
                </div>}
                <div className={style.ingredientsInsideContainer}>
                    {ingredients.map((object) => {
                        return (
                            <Ingredient key={object.key}
                                        id={object.key}
                                        text={object.name}
                                        price={object.price}
                                        thumbnail={object.image}/>
                        );
                    })}
                </div>
                {bun ? <div className={style.ingredientsOutsideContainer}>
                    <Ingredient type="bottom"
                                isLocked={true}
                                text={bun.name + " (низ)"}
                                price={bun.price}
                                thumbnail={bun.image}/>
                </div> : <span className={'text_type_main-default center-content mb-4'}>
                    Для оформления заказа бургера необходимо выбрать булку
                    </span>}
            </div>
            {bun && <div className={style.order}>
                <span className={`${style.price} text text_typeMain-large`}>
                    {countPrice(bun, ingredients)}
                    <CurrencyIcon type={"primary"}/>
                </span>
                <Button type="primary" size="large" onClick={offerConfirmation}>
                    Оформить заказ
                </Button>
            </div>}
        </section>);
}

export default BurgerConstructor;