import {ConstructorElement, DragIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import style from './ingredient.module.css';
import PropTypes from 'prop-types';
import {useDispatch} from "react-redux";
import {DROP_INGREDIENT, MOVE_INGREDIENT} from "../../../services/actions/constructor";
import {useDrag, useDrop} from "react-dnd";
import {draggableTypeMoveIngredient} from "../../app/app";

function Ingredient(props) {
    const ingredient = props.ingredient;

    const dispatch = useDispatch();

    const [{ isDragging }, drag] = useDrag(() => ({
        type: draggableTypeMoveIngredient,
        item: ingredient,
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    }));

    const [, drop] = useDrop(() => ({
        accept: draggableTypeMoveIngredient,
        canDrop: () => false,
        hover(draggableIngredient) {
            if (draggableIngredient.key !== ingredient.key) {
                dispatch({
                    type: MOVE_INGREDIENT,
                    ingredient: ingredient,
                    draggableIngredient: draggableIngredient
                });
            }
        },
    }));

    const drugIcon = !props.type ? <div className={style.drugIcon}><DragIcon type={'primary'}/></div> : "";

    const handleClose = () => {
        dispatch({
            type: DROP_INGREDIENT,
            key: props.id
        });
    }
    
    return (
        <div ref={props.isLocked ? null : (node) => drag(drop(node))}
             className={`${style.ingredient} ${isDragging && style.semiHidden}`}>
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