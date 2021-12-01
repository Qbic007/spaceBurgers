import style from './item.module.css';
import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import React from "react";
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from "react-redux";
import {SHOW_MODAL} from "../../../../services/actions/modal";
import {modalIngredient} from "../../../../services/reducers/modal";
import {useDrag} from "react-dnd";
import {DRAGGABLE_TYPE_ADD_INGREDIENT} from "../../../app/app";

function Item(props) {
    const ingredient = props.ingredient;

    const [{isDrag}, dragRef] = useDrag({
        type: DRAGGABLE_TYPE_ADD_INGREDIENT,
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
                image_large: ingredient.image_large,
                name: ingredient.name,
                calories: ingredient.calories,
                proteins: ingredient.proteins,
                fat: ingredient.fat,
                carbohydrates: ingredient.carbohydrates
            }
        });
    }

    const {bun, ingredients} = useSelector(store => ({
        ingredients: store.constructorReducer.ingredients,
        bun: store.constructorReducer.bun,
    }))

    const getQuantityByIngredientId = (ingredientId) => {
        let quantity = null;
        if (bun && bun._id === ingredientId) {
            quantity = 2;
        } else {
            const filteredIngredients = ingredients.filter(function (ingredient) {
                return ingredient._id === ingredientId;
            });
            quantity = filteredIngredients.length;
        }

        return quantity;
    }

    const quantity = getQuantityByIngredientId(ingredient._id);

    return (
        <section
            ref={dragRef}
            className={`${style.itemContainer} ${isDrag && style.semiHidden}`}
            onClick={showModal}>
            {quantity ? <span className={`${style.quantity} text text_type_digits-default`}>                
                {quantity}          
            </span> : null}
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
    ingredient: PropTypes.object.isRequired
};