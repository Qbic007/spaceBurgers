import React from "react";
import style from './property-container.module.css';

function PropertyContainer(props) {
    return (
        <div className={style.propertyContainer}>
            <span className={'text text_type_main-default'}>{props.title}</span>
            <span className={'text text_type_digits-default'}>{props.value}</span>
        </div>
    );
}

export default PropertyContainer;
