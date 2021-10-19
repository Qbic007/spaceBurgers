import style from './burger-ingredients.module.css';
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components';
import Section from "./section/section";

function tabs() {
    return (
        <div className={style.tabs}>
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

function filterByType(data, type) {
    return data.success ? data.data.filter(function (object) {
        return object.type === type;
    }) : [];
}

function BurgerIngredients(props) {
    return (
        <section className={style.ingredientsSection}>
            <h2 className={`${style.title} text text_type_main-large`}>соберите бургер</h2>
            {tabs()}
            <section className={style.container}>
                <Section title={'Булки'} items={filterByType(props.data, 'bun')}/>
                <Section title={'Соусы'} items={filterByType(props.data, 'sauce')}/>
                <Section title={'Начинки'} items={filterByType(props.data, 'main')}/>
            </section>
        </section>
    );
}

export default BurgerIngredients;