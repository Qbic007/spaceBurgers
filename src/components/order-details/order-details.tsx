import React from "react";
import style from './order-details.module.css';
import OrderStructureItem from "../order-structure-item";
import PriceWithIcon from "../price-with-icon";
import Section from "../burger-ingredients/section/section";
import {TYPE_BUN, TYPE_MAIN, TYPE_SAUCE} from "../../services/reducers/ingredients";

function OrderDetails() {
    return (
        <section className={style.orderContainer}>
            <h2 className={'text text_type_digits-default center-content'}>#034533</h2>
            <h2 className={'text text_type_main-medium mt-10'}>Black Hole Singularity острый бургер</h2>
            <div className={'text text_type_main-default mt-3 text_color_success'}>Выполнен</div>
            <h2 className={'text text_type_main-medium mt-15'}>Состав:</h2>
            <div className={style.orderStructureContainer}>
                <OrderStructureItem
                    image={"../../../images/accepted.png"}
                    title={'Флюоресцентная булка R2-D3'}
                    price={'1 x 20'}/>
                <OrderStructureItem
                    image={"../../../images/accepted.png"}
                    title={'Филе Люминесцентного тетраодонтимформа'}
                    price={'1 x 300'}/>
                <OrderStructureItem
                    image={"../../../images/accepted.png"}
                    title={'Филе Люминесцентного тетраодонтимформа'}
                    price={'1 x 300'}/>
                <OrderStructureItem
                    image={"../../../images/accepted.png"}
                    title={'Филе Люминесцентного тетраодонтимформа'}
                    price={'1 x 300'}/>
                <OrderStructureItem
                    image={"../../../images/accepted.png"}
                    title={'Филе Люминесцентного тетраодонтимформа'}
                    price={'1 x 300'}/>
            </div>
            <div className={style.orderFooterContainer}>
                <div className={'text text_type_main-small text_color_inactive'}>Вчера, 13:50 i-GMT+3</div>
                <PriceWithIcon price={'510'}/>
            </div>
        </section>
    );
}

export default OrderDetails;
