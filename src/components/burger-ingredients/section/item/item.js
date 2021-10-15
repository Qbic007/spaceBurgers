import style from './item.module.css';
import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import greenBun from '../../../../images/green-bun.png'

function Item() {
    return (
        <section className={style.itemContainer}>
            <span className={style.quantity + " text text_type_digits-default"}>1</span>
            <img className={style.image} src={greenBun} alt={'зелёная булка'}/>
            <div className={style.price}>
                        <span className={"text text_type_digits-default mr-2"}>
                            20
                        </span>
                <CurrencyIcon type={'primary'}/>
            </div>
            <span className={style.title + " text text_type_main-default mt-1"}>Краторная булка N-200i</span>
        </section>
    );
}

export default Item;