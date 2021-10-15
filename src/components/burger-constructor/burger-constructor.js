import style from './burger-constructor.module.css';
import greenBun from '../../images/green-bun.png';
import pinkBun from '../../images/pink-bun.png';
import Ingredient from "./ingredient/ingredient";
import {Button, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'

function BurgerConstructor() {
    return (
        <section className={style.constructorSection + " mt-25"}>
            <div className={style.ingredientsContainer}>
                <Ingredient type="top"
                            isLocked={true}
                            text="Краторная булка N-200i (верх)"
                            price={200}
                            thumbnail={greenBun}/>
                <Ingredient text="Краторная булка N-200i (верх)"
                            price={50}
                            thumbnail={pinkBun}/>
                <Ingredient text="Краторная булка N-200i (верх)"
                            price={50}
                            thumbnail={pinkBun}/>
                <Ingredient text="Краторная булка N-200i (верх)"
                            price={50}
                            thumbnail={pinkBun}/>
                <Ingredient text="Краторная булка N-200i (верх)"
                            price={50}
                            thumbnail={pinkBun}/>
                <Ingredient text="Краторная булка N-200i (верх)"
                            price={50}
                            thumbnail={pinkBun}/>
                <Ingredient type="bottom"
                            isLocked={true}
                            text="Краторная булка N-200i (низ)"
                            price={200}
                            thumbnail={pinkBun}/>
            </div>
            <div className={style.order}>
                <span className={style.price + " text text_type_main-large"}>
                    610
                    <CurrencyIcon type={"primary"}/>
                </span>
                <Button type="primary" size="large">
                    Оформить заказ
                </Button>
            </div>
        </section>
    );
}

export default BurgerConstructor;