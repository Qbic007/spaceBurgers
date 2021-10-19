import React from "react";
import style from './order-details.module.css';
import Modal from "../modal/modal";
import image from '../../images/accepted.png';
import PropTypes from "prop-types";

function OrderDetails(props) {
    return (
        <Modal title={props.title} closeCallback={props.closeCallback}>
            <div className={style.orderDetailsContainer}>
                <h3 className={'text text_type_digits-large mt-5'}>{props.order_id}</h3>
                <span className={'text text_type_main-medium mt-8'}>идентификатор заказа</span>
                <img src={image} alt={'заказ принят'} className={'mt-15'}/>
                <span className={'text text_type_main-default mt-15'}>Ваш заказ начали готовить</span>
                <span className={'text text_type_main-default mt-2 mb-15 dark-text'}>Дождитесь готовности на орбитальной станции</span>
            </div>
        </Modal>
    );
}

export default OrderDetails;

OrderDetails.propTypes = {
    closeCallback: PropTypes.func,
    order_id: PropTypes.string,
    title: PropTypes.string,
};
