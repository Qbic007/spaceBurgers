import style from './item.module.css';
import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import React from "react";
import PropTypes from 'prop-types';
import {useDispatch} from "react-redux";
import {SHOW_MODAL} from "../../../../services/actions/modal";
import {modalIngredient} from "../../../../services/reducers/modal";
import {useDrag} from "react-dnd";
import {draggable_type} from "../../../app/app";

function Item(props) {
    const ingredient= props.ingredient;
    
    const [{isDrag}, dragRef] = useDrag({
        type: draggable_type,
        item: ingredient,
        collect: monitor => ({
            isDrag: monitor.isDragging()
        })
    });

    const dispatch = useDispatch();

    const showModal = () => {
        dispatch({
            type: SHOW_MODAL,
            modalType: modalIngredient,
            ingredientInfo: {
                title: 'Детали ингредиента',
                image: ingredient.image,
                name: ingredient.name,
                calories: ingredient.calories,
                proteins: ingredient.proteins,
                fat: ingredient.fat,
                carbohydrates: ingredient.carbohydrates
            }
        });
    }

    const quantity = ingredient.quantity
        ? <span className={`${style.quantity} text text_type_digits-default`}>{ingredient.quantity}</span> : "";

    return (
        <section
            ref={dragRef}
            className={`${style.itemContainer} ${isDrag && style.semiHidden}`}
            onClick={showModal}>
            {quantity}
            <img className={style.image} src={ingredient.image} alt={ingredient.alt}/>
            <div className={style.price}>
                        <span className={"text text_type_digits-default mr-2"}>
                            {ingredient.price}
                        </span>
                <CurrencyIcon type={'primary'}/>
            </div>
            <span className={`${style.title} text text_typeMain-default mt-1`}>{ingredient.name}</span>
        </section>
    );
}

export default Item;

Item.propTypes = {
    ingredient: PropTypes.object
};