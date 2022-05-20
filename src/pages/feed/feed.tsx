import style from "./feed.module.css";
import listStyle from "./list.module.css";
import React from "react";
import SectionTitle from "../../components/section-title/section-title";
import OrderId from "../../components/order-id/order-id";
import OrderTime from "../../components/order-time/order-time";
import PriceWithIcon from "../../components/price-with-icon";

const ingredients = [
    "",
    "",
    "",
    "",
    "",
]

function FeedPage() {
    return (
        <main className={'text_type_main-medium'}>
            <div className={style.wrapper}>
                <div className={style.feedContainer}>
                    <h2 className={`style.title text_type_main-large`}>Лента заказов</h2>
                    <div className={style.orderListContainer}>
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
                    </div>
                    <div className={style.orderInfoContainer}>
                        <div className={style.orderScreen}>
                            <div className={style.readyTitle}>
                                <SectionTitle>Готовы:</SectionTitle>
                            </div>
                            <div className={style.readyList}>
                                <div className={'text text_type_digits-default text_color_success'}>034533</div>
                                <div className={'text text_type_digits-default text_color_success'}>034532</div>
                                <div className={'text text_type_digits-default text_color_success'}>034530</div>
                                <div className={'text text_type_digits-default text_color_success'}>034527</div>
                                <div className={'text text_type_digits-default text_color_success'}>034525</div>
                            </div>
                            <div className={style.processTitle}>
                                <SectionTitle>В работе:</SectionTitle>
                            </div>
                            <div className={style.processList}>
                                <div className={'text text_type_digits-default'}>034538</div>
                                <div className={'text text_type_digits-default'}>034541</div>
                                <div className={'text text_type_digits-default'}>034542</div>
                            </div>
                        </div>
                        <div className={`${style.counterContainer} mt-15`}>
                            <div className={style.counterTitle}>
                                <SectionTitle>Выполнено за все время:</SectionTitle>
                            </div>
                            <div className={'text text_type_digits-large'}>28 752</div>
                        </div>
                        <div className={`${style.counterContainer} mt-15`}>
                            <div className={style.counterTitle}>
                                <SectionTitle>Выполнено за сегодня:</SectionTitle>
                            </div>
                            <div className={'text text_type_digits-large'}>138</div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default FeedPage;
