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
import {DRAGGABLE_TYPE_ADD_INGREDIENT, makeLinkUrl} from "../app/app";
import Modal from "../modal/modal";
import {REFRESH_TOKEN_ITEM_KEY} from "../../services/reducers/auth";
import {useNavigate} from "react-router-dom";
import {LOGIN} from "../../services/actions/auth";

interface ConstructorReducer {
    ingredients: Ingredient[];
    bun: Ingredient;
    orderNumber: number;
}

interface ModalReducer {
    isVisibleOrder: boolean;
}

interface Store {
    modalReducer: ModalReducer;
    constructorReducer: ConstructorReducer;
}

function BurgerConstructor() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const closeModal = () => {
        dispatch({type: CLOSE_MODAL});
    }

    const [, dropTarget] = useDrop({
        accept: DRAGGABLE_TYPE_ADD_INGREDIENT,
        drop(item) {
            dispatch({
                type: ADD_INGREDIENT,
                item: item
            });
        }
    });

    const {isVisibleOrder} = useSelector((store:Store) => ({
        isVisibleOrder: store.modalReducer.isVisibleOrder
    }))

    const {ingredients, bun, orderNumber} = useSelector((store: Store) => ({
        ingredients: store.constructorReducer.ingredients,
        bun: store.constructorReducer.bun,
        orderNumber: store.constructorReducer.orderNumber
    }))

    const getIngredientIds = (bun: Ingredient, ingredients: Ingredient[]) => {
        let ingredientIds: string[] = ingredients.map(function (ingredient: Ingredient) {
            return ingredient._id;
        });
        ingredientIds.push(bun._id);
        ingredientIds.push(bun._id);
        return ingredientIds;
    }

    const offerConfirmation = () => {
        if (localStorage.getItem(REFRESH_TOKEN_ITEM_KEY) !== null) {
            dispatch(orderConfirmation(getIngredientIds(bun, ingredients)));
            dispatch({
                type: SHOW_MODAL,
                modalType: modalOrder
            });
        } else {
            navigate(makeLinkUrl(LOGIN));
        }
    }

    const countPrice = (bun: Ingredient, ingredients: Ingredient[]) => {
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
                    <Ingredient ingredient={bun}
                                type="top"
                                isLocked={true}
                                text={bun.name + " (верх)"}
                                price={bun.price}
                                thumbnail={bun.image}/>
                </div>}
                <div className={style.ingredientsInsideContainer}>
                    {ingredients.map((object: Ingredient) => {
                        return (
                            <Ingredient ingredient={object}
                                        key={object.key}
                                        id={object.key}
                                        text={object.name}
                                        price={object.price}
                                        thumbnail={object.image}
                            />
                        );
                    })}
                </div>
                {bun ? <div className={style.ingredientsOutsideContainer}>
                    <Ingredient ingredient={bun}
                                type="bottom"
                                isLocked={true}
                                text={bun.name + " (низ)"}
                                price={bun.price}
                                thumbnail={bun.image}/>
                </div> : <span className={'text_type_main-default center-content mb-4'}>
                    Для оформления заказа бургера необходимо выбрать булку
                    </span>}
            </div>
            {bun && <div className={style.order}>
                <span className={`${style.price} text text_type_main-large`}>
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