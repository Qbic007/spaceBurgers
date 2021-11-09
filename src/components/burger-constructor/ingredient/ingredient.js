import {ConstructorElement, DragIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import style from './ingredient.module.css';
import PropTypes from 'prop-types';
import {useDispatch} from "react-redux";
import {DROP_INGREDIENT} from "../../../services/actions/constructor";
import {useDrag} from "react-dnd";
import {draggableTypeIngredients} from "../../app/app";

function Ingredient(props) {
    const ingredient = props.ingredient;

    const dispatch = useDispatch();

    const [{isDrag}, dragRef] = useDrag({
        type: draggableTypeIngredients,
        item: ingredient,
        collect: monitor => ({
            isDrag: monitor.isDragging()
        })
    });

    const drugIcon = !props.type ? <div className={style.drugIcon}><DragIcon type={'primary'}/></div> : "";

    const handleClose = () => {
        dispatch({
            type: DROP_INGREDIENT,
            key: props.id
        });
    }

    return (
        <div ref={!props.isLocked  ? dragRef : null}
             className={`${style.ingredient} ${isDrag && style.semiHidden}`}>
            {drugIcon}
            <ConstructorElement
                type={props.type}
                isLocked={props.isLocked}
                text={props.text}
                price={props.price}
                thumbnail={props.thumbnail}
                handleClose={handleClose}
            />
        </div>
    );
}

export default Ingredient;

Ingredient.propTypes = {
    type: PropTypes.string,
    isLocked: PropTypes.bool,
    text: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
};