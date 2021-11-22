import React from "react";
import style from './ingredient-details.module.css';
import PropertyContainer from "./property-container/property-container";
import PropTypes from "prop-types";
import {useSelector} from "react-redux";

function IngredientDetails() {
    const {ingredientInfo} = useSelector(store => ({
        ingredientInfo: store.modalReducer.ingredientInfo
    }))

    return (
        <>
            <div className={style.titleContainer}>
                <h2 className={'text text_type_main-large'}>{ingredientInfo.title}</h2>
            </div>
            <div>
                <div className={style.imageContainer}>
                    <img src={ingredientInfo.image} alt={ingredientInfo.name}/>
                </div>
                <h3 className={'text text_typeMain-medium'}>{ingredientInfo.name}</h3>
                <div className={style.propertiesContainer}>
                    <PropertyContainer title={'Калории, ккал'} value={ingredientInfo.calories}/>
                    <PropertyContainer title={'Белки, г'} value={ingredientInfo.proteins}/>
                    <PropertyContainer title={'Жиры, г'} value={ingredientInfo.fat}/>
                    <PropertyContainer title={'Углеводы, г'} value={ingredientInfo.carbohydrates}/>
                </div>
            </div>
        </>
    );
}

export default IngredientDetails;

IngredientDetails.propTypes = {
    closeCallback: PropTypes.func,
    title: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
    calories: PropTypes.number,
    proteins: PropTypes.number,
    fat: PropTypes.number,
    carbohydrates: PropTypes.number,
};
