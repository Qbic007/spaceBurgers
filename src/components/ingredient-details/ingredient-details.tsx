import React from "react";
import style from './ingredient-details.module.css';
import PropertyContainer from "./property-container/property-container";

export interface IngredientInfo {
    title: string;
    name?: string | undefined;
    image_large?: string | undefined;
    calories?: string | number | undefined;
    proteins?: string | number | undefined;
    fat?: string | number | undefined;
    carbohydrates?: string | number | undefined;
}

type Props = {
    ingredientInfo: IngredientInfo;
}

function IngredientDetails(props: Props) {
    const ingredientInfo = props.ingredientInfo;

    return (
        <>
            <div className={style.titleContainer}>
                <h2 className={'text text_type_main-large'}>{ingredientInfo.title}</h2>
            </div>
            <div>
                <div className={style.imageContainer}>
                    <img src={ingredientInfo.image_large} alt={ingredientInfo.name}/>
                </div>
                <h3 className={'text text_typeMain- center-content'}>{ingredientInfo.name}</h3>
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
