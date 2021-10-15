import style from './burger-ingredients.module.css';
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components'
import Section from "./section/section";

function BurgerIngredients() {
    return (
        <section className={style.ingredientsSection}>
            <h2 className={style.title + " text text_type_main-large"}>соберите бургер</h2>
            {tabs()}
            <Section title={'Булки'}/>
            <Section title={'Соусы'}/>
            <Section title={'Начинки'}/>
        </section>
    );
}

export default BurgerIngredients;

function tabs() {
    return (
        <div style={{display: 'flex'}} className={style.tabs}>
            <Tab value="one" active={0} onClick='one'>
                Булки
            </Tab>
            <Tab value="two" active={0} onClick='two'>
                Соусы
            </Tab>
            <Tab value="three" active={1} onClick='three'>
                Начинки
            </Tab>
        </div>
    )
}