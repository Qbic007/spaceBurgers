import React from "react";
import style from './ingredient-details.module.css';
import PropertyContainer from "./property-container/property-container";
import Modal from "../modal/modal";
import PropTypes from "prop-types";
import {useSelector} from "react-redux";

function IngredientDetails() {
    const {ingredientInfo} = useSelector(store => ({
        ingredientInfo: store.modalReducer.ingredientInfo
    }))

    return (
        <Modal title={ingredientInfo.title}>
            <div>
                <div className={style.imageContainer}>
                    <img src={ingredientInfo.image} alt={ingredientInfo.name}/>
                </div>
                <h3 className={'text text_type_main-medium'}>{ingredientInfo.name}</h3>
                <div className={style.propertiesContainer}>
                    <PropertyContainer title={'Калории, ккал'} value={ingredientInfo.calories}/>
                    <PropertyContainer title={'Белки, г'} value={ingredientInfo.proteins}/>
                    <PropertyContainer title={'Жиры, г'} value={ingredientInfo.fat}/>
                    <PropertyContainer title={'Углеводы, г'} value={ingredientInfo.carbohydrates}/>
                </div>
            </div>
        </Modal>
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
