import style from './item.module.css';
import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import React from "react";
import IngredientDetails from "../../../ingredient-details/ingredient-details";
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from "react-redux";
import {CLOSE_MODAL, SHOW_MODAL} from "../../../../services/actions/modal";
import {modalIngredient} from "../../../../services/reducers/modal";

function Item(props) {
    const dispatch = useDispatch();

    const {isVisibleIngredient} = useSelector(store => ({
        isVisibleIngredient: store.modalReducer.isVisibleIngredient
    }))

    const showModal = () => {
        dispatch({type: SHOW_MODAL, modalType: modalIngredient});
    }

    const closeModal = () => {
        dispatch({type: CLOSE_MODAL, modalType: modalIngredient});
    }

    const quantity = props.quantity
        ? <span className={`${style.quantity} text text_type_digits-default`}>{props.quantity}</span> : "";

    return (
        <section className={style.itemContainer} onClick={showModal}>
            {isVisibleIngredient && <IngredientDetails closeCallback={closeModal}
                                             title={'Детали ингредиента'}
                                             image={props.image}
                                             name={props.name}
                                             calories={props.calories}
                                             proteins={props.proteins}
                                             fat={props.fat}
                                             carbohydrates={props.carbohydrates}/>}
            {quantity}
            <img className={style.image} src={props.image} alt={props.alt}/>
            <div className={style.price}>
                        <span className={"text text_type_digits-default mr-2"}>
                            {props.price}
                        </span>
                <CurrencyIcon type={'primary'}/>
            </div>
            <span className={`${style.title} text text_type_main-default mt-1`}>{props.name}</span>
        </section>
    );
}

export default Item;

Item.propTypes = {
    quantity: PropTypes.number,
    image: PropTypes.string,
    name: PropTypes.string,
    calories: PropTypes.number,
    proteins: PropTypes.number,
    fat: PropTypes.number,
    carbohydrates: PropTypes.number,
    alt: PropTypes.string,
};