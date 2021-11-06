import style from './item.module.css';
import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import React from "react";
import PropTypes from 'prop-types';
import {useDispatch} from "react-redux";
import {SHOW_MODAL} from "../../../../services/actions/modal";
import {modalIngredient} from "../../../../services/reducers/modal";

function Item(props) {
    const dispatch = useDispatch();

    const showModal = () => {
        dispatch({
            type: SHOW_MODAL,
            modalType: modalIngredient,
            ingredientInfo: {
                title: 'Детали ингредиента',
                image: props.image,
                name: props.name,
                calories: props.calories,
                proteins: props.proteins,
                fat: props.fat,
                carbohydrates: props.carbohydrates
            }
        });
    }

    const quantity = props.quantity
        ? <span className={`${style.quantity} text text_type_digits-default`}>{props.quantity}</span> : "";

    return (
        <section className={style.itemContainer} onClick={showModal}>
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