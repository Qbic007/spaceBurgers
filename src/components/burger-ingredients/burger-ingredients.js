import style from './burger-ingredients.module.css';
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components';
import Section from "./section/section";
import IngredientDetails from "../ingredient-details/ingredient-details";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {typeBun, typeMain, typeSauce} from "../../services/reducers/ingredients";
import Modal from "../modal/modal";
import {CLOSE_MODAL} from "../../services/actions/modal";

function tabs() {
    return (
        <div className={style.tabs}>
            <Tab value="one" active={0} onClick='one'>
                Булки
            </Tab>
            <Tab value="two" active={0} onClick='two'>
                Соусы
            </Tab>
            <Tab value="three" active={1} onClick='three'>
                Начинки
            </Tab>
        </div>
    )
}

function filterByType(ingredients, type) {
    return ingredients.filter(function (object) {
        return object.type === type;
    });
}

function BurgerIngredients() {
    const dispatch = useDispatch();

    const closeModal = () => {
        dispatch({type: CLOSE_MODAL});
    }

    const {isVisibleIngredient} = useSelector(store => ({
        isVisibleIngredient: store.modalReducer.isVisibleIngredient
    }))

    const {ingredients, ingredientsFailed} = useSelector(store => ({
        ingredients: store.ingredientsReducer.ingredients,
        ingredientsFailed: store.ingredientsReducer.ingredientsFailed,
    }))

    return (
        <section className={style.ingredientsSection}>
            {isVisibleIngredient && <Modal closeModal={closeModal}>
                <IngredientDetails/>
            </Modal>}
            <h2 className={`${style.title} text_type_main-large`}>соберите бургер</h2>
            {tabs()}
            {ingredientsFailed
                ? <span className={'text text_type_main-default'}>Извините, что-то пошло не так :-(</span>
                : <section className={style.container}>
                    <Section title={'Булки'} items={filterByType(ingredients, typeBun)}/>
                    <Section title={'Соусы'} items={filterByType(ingredients, typeSauce)}/>
                    <Section title={'Начинки'} items={filterByType(ingredients, typeMain)}/>
                </section>}
        </section>
    );
}

export default BurgerIngredients;