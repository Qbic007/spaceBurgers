import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import React from "react";
import style from "./index.module.css";

type Props = {
    price: string;
}

function PriceWithIcon(props: Props) {

    return (
        <span className={style.priceWithIcon}>
            <span className='text text_type_main-medium text_color_primary'>{props.price}</span>
            <CurrencyIcon type={'primary'}/>
        </span>
    );
}

export default PriceWithIcon;
