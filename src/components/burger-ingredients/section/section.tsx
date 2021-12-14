import style from './section.module.css';
import Item from "./item/item";
import {IIngredient} from "../../../services/types";

type Props = {
    title: string;
    items: IIngredient[];
}

function Section(props: Props) {
    return (
        props.items.length > 0 ? <section className={style.ingredientsBlock}>
            <h3 className={`${style.title} text text_typeMain-medium`}>{props.title}</h3>
            <div className={style.container}>
                {props.items.map((ingredient: IIngredient) => {
                    return (
                        <Item key={ingredient._id} ingredient={ingredient}/>
                    );
                })}
            </div>
        </section> : null
    );
}

export default Section;