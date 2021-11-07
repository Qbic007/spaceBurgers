import style from './section.module.css';
import Item from "./item/item";
import PropTypes from "prop-types";

function Section(props) {
    return (
        props.items.length > 0 ? <section className={style.ingredientsBlock}>
            <h3 className={`${style.title} text text_typeMain-medium`}>{props.title}</h3>
            <div className={style.container}>
                {props.items.map((ingredient) => {
                    return (
                        <Item ingredient={ingredient}/>
                    );
                })}
            </div>
        </section> : null
    );
}

export default Section;

Section.propTypes = {
    title: PropTypes.string,
    items: PropTypes.array,
};