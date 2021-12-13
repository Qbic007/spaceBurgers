import style from './burger-ingredients.module.css';
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components';
import Section from "./section/section";
import IngredientDetails from "../ingredient-details/ingredient-details";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {TYPE_BUN, TYPE_MAIN, TYPE_SAUCE} from "../../services/reducers/ingredients";
import Modal from "../modal/modal";
import {CLOSE_MODAL} from "../../services/actions/modal";
import {useNavigate} from "react-router-dom";
import {makeLinkUrl, PATH_CONSTRUCTOR} from "../app/app";
import Ingredient, {IngredientType} from "../burger-constructor/ingredient/ingredient";

function BurgerIngredients() {
    const navigate = useNavigate();

    function tabs() {
        return (
            <div className={style.tabs}>
                <Tab value="one" active={false} onClick={() => 'one'}>
                    Булки
                </Tab>
                <Tab value="two" active={false} onClick={() => 'two'}>
                    Соусы
                </Tab>
                <Tab value="three" active={true} onClick={() => 'three'}>
                    Начинки
                </Tab>
            </div>
        )
    }

    function filterByType(ingredients: Ingredient[], type: IngredientType) {
        return ingredients.filter(function (object: Ingredient) {
            return object.type === type;
        });
    }

    const {ingredientInfo} = useSelector(store => ({
        ingredientInfo: store.modalReducer.ingredientInfo
    }))

    const dispatch = useDispatch();

    const closeModal = () => {
        dispatch({type: CLOSE_MODAL});
        navigate(makeLinkUrl(PATH_CONSTRUCTOR));
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
                <IngredientDetails ingredientInfo={ingredientInfo}/>
            </Modal>}
            <h2 className={`${style.title} text_type_main-large`}>соберите бургер</h2>
            {tabs()}
            {ingredientsFailed
                ? <span className={'text text_type_main-default'}>Извините, что-то пошло не так :-(</span>
                : <section id={'scrollArea'} className={style.container}>
                    <Section title={'Булки'} items={filterByType(ingredients, TYPE_BUN)}/>
                    <Section title={'Соусы'} items={filterByType(ingredients, TYPE_SAUCE)}/>
                    <Section title={'Начинки'} items={filterByType(ingredients, TYPE_MAIN)}/>
                </section>}
        </section>
    );
}

export default BurgerIngredients;