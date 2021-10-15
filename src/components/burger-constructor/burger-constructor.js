import style from './burger-constructor.module.css';
import greenBun from '../../images/green-bun.png';
import pinkBun from '../../images/pink-bun.png';
import Ingredient from "./ingredient/ingredient";

function BurgerConstructor() {
    return (
        <section className={style.constructorSection + " mt-25"}>
            <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
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
        </section>
    );
}

export default BurgerConstructor;