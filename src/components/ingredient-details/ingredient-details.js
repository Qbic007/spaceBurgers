import React from "react";
import style from './ingredient-details.module.css';
import PropertyContainer from "./property-container/property-container";
import Modal from "../modal/modal";

function IngredientDetails(props) {
    return (
        <Modal title={props.title}>
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
        </Modal>
    );
}

export default IngredientDetails;
