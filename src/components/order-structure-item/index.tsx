import React from "react";
import style from "./index.module.css";
import PriceWithIcon from "../price-with-icon";

type Props = {
    image: string;
    title: string;
    price: string;
}

function OrderStructureItem(props: Props) {

    return (
        <div className={style.orderStructureItem}>
            <div className={style.orderStructureItemInfoContainer}>
                <div className={style.orderStructureItemImageContainer}>
                    <img src={props.image}/>
                </div>
                <div className={'text text_type_main-default'}>
                    {props.title}
                </div>
            </div>
            <div>
                <PriceWithIcon price={props.price}/>
            </div>
        </div>
    );
}

export default OrderStructureItem;
