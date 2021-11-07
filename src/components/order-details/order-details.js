import React from "react";
import style from './order-details.module.css';
import Modal from "../modal/modal";
import image from '../../images/accepted.png';
import PropTypes from "prop-types";
import {useSelector} from "react-redux";

function OrderDetails(props) {
    const {orderNumber} = useSelector(store => ({
        orderNumber: store.constructorReducer.orderNumber
    }))
    
    return (
        <Modal title={props.title}>
            <div className={style.orderDetailsContainer}>
                <h3 className={'text text_type_digits-large mt-5'}>{orderNumber}</h3>
                <span className={'text text_typeMain-medium mt-8'}>идентификатор заказа</span>
                <img src={image} alt={'заказ принят'} className={'mt-15'}/>
                <span className={'text text_typeMain-default mt-15'}>Ваш заказ начали готовить</span>
                <span className={'text text_typeMain-default mt-2 mb-15 dark-text'}>Дождитесь готовности на орбитальной станции</span>
            </div>
        </Modal>
    );
}

export default OrderDetails;

OrderDetails.propTypes = {
    title: PropTypes.string,
};
