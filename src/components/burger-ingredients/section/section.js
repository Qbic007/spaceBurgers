import style from './section.module.css';
import Item from "./item/item";
import greenBun from '../../../images/green-bun.png'
import pinkBun from '../../../images/pink-bun.png'

function Section(props) {
    return (
        <section className={style.ingredientsBlock}>
            <h3 className={style.title + " text text_type_main-medium"}>{props.title}</h3>
            <div className={style.container}>
                <Item quantity={1} image={greenBun} alt={"зеленая булка"}/>
                <Item image={pinkBun} alt={"фиолетовая булка"}/>
            </div>
        </section>
    );
}

export default Section;