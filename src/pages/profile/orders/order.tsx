import style from "../profile.module.css";
import React from "react";
import OrderDetails from "../../../components/order-details/order-details";

function OrderPage() {
    return (
        <main className={`${style.formMain} text_type_main-medium`}>
            <div className={style.wrapper}>
                <OrderDetails/>
            </div>
        </main>
    );
}

export default OrderPage;
