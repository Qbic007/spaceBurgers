import React from "react";
import style from './order-details.module.css';
import OrderStructureItem from "../order-structure-item";
import PriceWithIcon from "../price-with-icon";
import OrderId from "../order-id/order-id";
import OrderTime from "../order-time/order-time";
import SectionTitle from "../section-title/section-title";

function OrderDetails() {
    return (
        <section className={style.orderContainer}>
            <OrderId id={'034533'} />
            <h2 className={'text text_type_main-medium mt-10'}>Black Hole Singularity острый бургер</h2>
            <div className={'text text_type_main-default mt-3 text_color_success'}>Выполнен</div>
            <SectionTitle>Состав:</SectionTitle>
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
                <OrderTime time={'Вчера, 13:50 i-GMT+3'} />
                <PriceWithIcon price={'510'}/>
            </div>
        </section>
    );
}

export default OrderDetails;
