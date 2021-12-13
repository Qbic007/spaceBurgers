import React from "react";
import style from './order-details.module.css';
import image from '../../images/accepted.png';
import {useSelector} from "react-redux";

interface ConstructorReducer {
    orderNumber: number;
}

interface Store {
    constructorReducer: ConstructorReducer;
}

function OrderDetails() {
    const {orderNumber} = useSelector((store: Store) => ({
        orderNumber: store.constructorReducer.orderNumber
    }))

    return (
        <div className={style.orderDetailsContainer}>
            <h3 className={'text text_type_digits-large mt-5'}>{orderNumber}</h3>
            <span className={'text text_typeMain-medium mt-8'}>идентификатор заказа</span>
            <img src={image} alt={'заказ принят'} className={'mt-15'}/>
            <span className={'text text_typeMain-default mt-15'}>Ваш заказ начали готовить</span>
            <span className={'text text_typeMain-default mt-2 mb-15 dark-text'}>Дождитесь готовности на орбитальной станции</span>
        </div>
    );
}

export default OrderDetails;
