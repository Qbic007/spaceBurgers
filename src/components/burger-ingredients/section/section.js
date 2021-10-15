import style from './section.module.css';
import Item from "./item/item";

function Section() {
    return (
        <section className={style.ingredientsBlock}>
            <h3 className={style.title + " text text_type_main-medium"}>Булки</h3>
            <div className={style.container}>
                <Item/>
                <Item/>
                <Item/>
            </div>
        </section>
    );
}

export default Section;