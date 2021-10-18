import React from "react";
import style from './modal.module.css';
import {CloseIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import PropertyContainer from "./property-container/property-container";

function Modal(props) {
    return (
        <section className={style.modal}>
            <div className={style.titleContainer}>
                <h2 className={'text text_type_main-large'}>{props.title}</h2>
                <CloseIcon type={'primary'}/>
            </div>
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
        </section>
    );
}

export default Modal;
