import {ConstructorElement, DragIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import style from './ingredient.module.css';

function Ingredient(props) {
    const drugIcon = !props.type ? <div className={style.drugIcon}><DragIcon type={'primary'}/></div> : "";

    return (
        <div className={style.ingredient}>
            {drugIcon}
            <ConstructorElement
                type={props.type}
                isLocked={props.isLocked}
                text={props.text}
                price={props.price}
                thumbnail={props.thumbnail}
            />
        </div>
    );
}

export default Ingredient;