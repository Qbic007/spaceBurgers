import style from './burger-constructor.module.css';
import Ingredient from "./ingredient/ingredient";
import {Button, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import React from "react";
import OrderDetails from "../order-details/order-details";

function BurgerConstructor(props) {
    const [showInfo, setShowInfo] = React.useState(false);

    const showOrderModal = () => {
        setShowInfo(true);
    }

    const closeOrderModal = () => {
        setShowInfo(false);
    }

    return (
        props.data.success ? <section className={`${style.constructorSection} mt-25`}>
            {showInfo && <OrderDetails order_id='034536' closeCallback={closeOrderModal}/>}
            <div className={style.ingredientsContainer}>
                <div className={style.ingredientsInsideContainer}>
                    <Ingredient type="top"
                                isLocked={true}
                                text={props.data.data[0].name + " (верх)"}
                                price={props.data.data[0].price}
                                thumbnail={props.data.data[0].image}/>
                </div>
                <div className={style.ingredientsInsideContainer}>
                    <Ingredient text={props.data.data[1].name}
                                price={props.data.data[1].price}
                                thumbnail={props.data.data[1].image}/>
                    <Ingredient text={props.data.data[2].name}
                                price={props.data.data[2].price}
                                thumbnail={props.data.data[2].image}/>
                    <Ingredient text={props.data.data[3].name}
                                price={props.data.data[3].price}
                                thumbnail={props.data.data[3].image}/>
                    <Ingredient text={props.data.data[4].name}
                                price={props.data.data[4].price}
                                thumbnail={props.data.data[4].image}/>
                    <Ingredient text={props.data.data[4].name}
                                price={props.data.data[4].price}
                                thumbnail={props.data.data[4].image}/>
                    <Ingredient text={props.data.data[4].name}
                                price={props.data.data[4].price}
                                thumbnail={props.data.data[4].image}/>
                    <Ingredient text={props.data.data[5].name}
                                price={props.data.data[5].price}
                                thumbnail={props.data.data[5].image}/>
                </div>
                <div className={style.ingredientsInsideContainer}>
                    <Ingredient type="bottom"
                                isLocked={true}
                                text={props.data.data[0].name + " (низ)"}
                                price={props.data.data[0].price}
                                thumbnail={props.data.data[0].image}/>
                </div>
            </div>
            <div className={style.order}>
                <span className={`${style.price} text text_type_main-large`}>
                    610
                    <CurrencyIcon type={"primary"}/>
                </span>
                <Button type="primary" size="large" onClick={showOrderModal}>
                    Оформить заказ
                </Button>
            </div>
        </section> : null);
}

export default BurgerConstructor;