import style from './burger-ingredients.module.css';
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components';
import Section from "./section/section";

function BurgerIngredients(props) {
    return (
        <section className={style.ingredientsSection}>
            <h2 className={style.title + " text text_type_main-large"}>соберите бургер</h2>
            {tabs()}
            <section className={style.container}>
                <Section title={'Булки'} items={getBuns(props.data)}/>
                <Section title={'Соусы'} items={getSauces(props.data)}/>
                <Section title={'Начинки'} items={getMains(props.data)}/>
            </section>
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

function getBuns(data) {
    return data.success ? data.data.filter(function (object) {
        return object.type === 'bun';
    }) : [];
}

function getSauces(data) {
    return data.success ? data.data.filter(function (object) {
        return object.type === 'sauce';
    }) : [];
}

function getMains(data) {
    return data.success ? data.data.filter(function (object) {
        return object.type === 'main';
    }) : [];
}