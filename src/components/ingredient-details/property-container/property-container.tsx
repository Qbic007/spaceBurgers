import React from "react";
import style from './property-container.module.css';

type Props = {
    title: string;
    value: string | number | undefined;
}

function PropertyContainer(props: Props) {
    return (
        <div className={style.propertyContainer}>
            <span className={'text text_typeMain-default'}>{props.title}</span>
            <span className={'text text_type_digits-default'}>{props.value}</span>
        </div>
    );
}

export default PropertyContainer;
