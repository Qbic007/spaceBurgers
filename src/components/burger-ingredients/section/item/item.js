import style from './item.module.css';
import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'

function Item(props) {
    const quantity = props.quantity
        ? <span className={style.quantity + " text text_type_digits-default"}>{props.quantity}</span> : "";

    return (
        <section className={style.itemContainer}>
            {quantity}
            <img className={style.image} src={props.image} alt={props.alt}/>
            <div className={style.price}>
                        <span className={"text text_type_digits-default mr-2"}>
                            {props.price}
                        </span>
                <CurrencyIcon type={'primary'}/>
            </div>
            <span className={style.title + " text text_type_main-default mt-1"}>{props.name}</span>
        </section>
    );
}

export default Item;