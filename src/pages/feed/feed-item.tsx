import style from "./feed-item.module.css";
import React from "react";
import OrderDetails from "../../components/order-details/order-details";

function FeedItemPage() {
    return (
        <main className={'text_type_main-medium'}>
            <div className={style.wrapper}>
                <OrderDetails/>
            </div>
        </main>
    );
}

export default FeedItemPage;
