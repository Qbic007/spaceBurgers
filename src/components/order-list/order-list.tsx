import React from "react";
import listStyle from "./order-list.module.css";
import OrderId from "../order-id/order-id";
import OrderTime from "../order-time/order-time";
import SectionTitle from "../section-title/section-title";
import PriceWithIcon from "../price-with-icon";

const ingredients = [
    "",
    "",
    "",
    "",
    "",
]

function OrderList() {
    return (
        <div className={listStyle.listContainer}>
            <div className={listStyle.listItemContainer}>
                <div className={listStyle.listItemOrderId}>
                    <OrderId id={'034535'} />
                </div>
                <div className={listStyle.listItemOrderTime}>
                    <OrderTime time={'Сегодня, 16:20 i-GMT+3'} />
                </div>
                <div className={listStyle.listItemTitle}>
                    <SectionTitle>Death Star Starship Main бургер</SectionTitle>
                </div>
                <div className={listStyle.listItemComponentsContainer}>
                    {ingredients.map((topping, index) => {
                        return <img
                            className={listStyle.listItemImage}
                            src={'https://code.s3.yandex.net/react/code/bun-02.png'}
                        />
                    })}
                </div>
                <div className={listStyle.listItemPrice}>
                    <PriceWithIcon price={'480'} />
                </div>
            </div>
            <div className={listStyle.listItemContainer}>
                <div className={listStyle.listItemOrderId}>
                    <OrderId id={'034535'} />
                </div>
                <div className={listStyle.listItemOrderTime}>
                    <OrderTime time={'Сегодня, 16:20 i-GMT+3'} />
                </div>
                <div className={listStyle.listItemTitle}>
                    <SectionTitle>Death Star Starship Main бургер</SectionTitle>
                </div>
                <div className={listStyle.listItemComponentsContainer}>
                    {ingredients.map((topping, index) => {
                        return <img
                            className={listStyle.listItemImage}
                            src={'https://code.s3.yandex.net/react/code/bun-02.png'}
                        />
                    })}
                </div>
                <div className={listStyle.listItemPrice}>
                    <PriceWithIcon price={'480'} />
                </div>
            </div>
        </div>
    );
}

export default OrderList;
