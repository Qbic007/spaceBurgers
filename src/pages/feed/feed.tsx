import style from "./feed.module.css";
import React from "react";
import SectionTitle from "../../components/section-title/section-title";

function FeedPage() {
    return (
        <main className={'text_type_main-medium'}>
            <div className={style.wrapper}>
                <div className={style.feedContainer}>
                    <h2 className={`style.title text_type_main-large`}>Лента заказов</h2>
                    <div className={style.orderListContainer}>1</div>
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
