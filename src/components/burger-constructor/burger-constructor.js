import style from './burger-constructor.module.css';
import Ingredient from "./ingredient/ingredient";
import {Button, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import Data from '../../utils/data';

function BurgerConstructor() {
    const bun = Data[0];

    return (
        <section className={style.constructorSection + " mt-25"}>
            <div className={style.ingredientsContainer}>
                <Ingredient type="top"
                            isLocked={true}
                            text={bun.name + " (верх)"}
                            price={bun.price}
                            thumbnail={bun.image}/>
                <Ingredient text={Data[1].name}
                            price={Data[1].price}
                            thumbnail={Data[1].image}/>
                <Ingredient text={Data[2].name}
                            price={Data[2].price}
                            thumbnail={Data[2].image}/>
                <Ingredient text={Data[3].name}
                            price={Data[3].price}
                            thumbnail={Data[3].image}/>
                <Ingredient text={Data[4].name}
                            price={Data[4].price}
                            thumbnail={Data[4].image}/>
                <Ingredient text={Data[5].name}
                            price={Data[5].price}
                            thumbnail={Data[5].image}/>
                <Ingredient type="bottom"
                            isLocked={true}
                            text={bun.name + " (низ)"}
                            price={bun.price}
                            thumbnail={bun.image}/>
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