import style from './section.module.css';
import Item from "./item/item";

function Section(props) {
    return (
        <section className={style.ingredientsBlock}>
            <h3 className={`${style.title} text text_type_main-medium`}>{props.title}</h3>
            <div className={style.container}>
                {props.items.map((object, index) => {
                    return (
                        <Item name={object.name}
                              quantity={Math.floor(Math.random() * 2)}
                              image={object.image}
                              alt={object.name}
                              price={object.price}
                              key={object._id}
                              calories={object.calories}
                              proteins={object.proteins}
                              fat={object.fat}
                              carbohydrates={object.carbohydrates}
                        />
                    );
                })}
            </div>
        </section>
    );
}

export default Section;