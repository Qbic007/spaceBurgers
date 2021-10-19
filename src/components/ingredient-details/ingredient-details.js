import React from "react";
import style from './ingredient-details.module.css';
import PropertyContainer from "./property-container/property-container";
import Modal from "../modal/modal";
import PropTypes from "prop-types";

function IngredientDetails(props) {
    return (
        <Modal title={props.title} closeCallback={props.closeCallback}>
            <div>
                <div className={style.imageContainer}>
                    <img src={props.image} alt={props.name}/>
                </div>
                <h3 className={'text text_type_main-medium'}>{props.name}</h3>
                <div className={style.propertiesContainer}>
                    <PropertyContainer title={'Калории, ккал'} value={props.calories}/>
                    <PropertyContainer title={'Белки, г'} value={props.proteins}/>
                    <PropertyContainer title={'Жиры, г'} value={props.fat}/>
                    <PropertyContainer title={'Углеводы, г'} value={props.carbohydrates}/>
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
