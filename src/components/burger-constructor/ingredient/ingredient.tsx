import {ConstructorElement, DragIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import style from './ingredient.module.css';
import {useDispatch} from "react-redux";
import {DROP_INGREDIENT, MOVE_INGREDIENT} from "../../../services/actions/constructor";
import {DragSourceMonitor, useDrag, useDrop} from "react-dnd";
import {DRAGGABLE_TYPE_MOVE_INGREDIENT} from "../../app/app";
import {IIngredient} from "../../../services/types";

type Props = {
    id?: string;
    type?: 'top' | 'bottom';
    isLocked?: boolean;
    text: string;
    price: number;
    thumbnail: string;
    ingredient: IIngredient;
}

function Ingredient(props: Props) {
    const ingredient = props.ingredient;

    const dispatch = useDispatch();

    const [{isDragging}, drag] = useDrag(() => ({
        type: DRAGGABLE_TYPE_MOVE_INGREDIENT,
        item: ingredient,
        collect: (monitor: DragSourceMonitor) => ({
            isDragging: monitor.isDragging(),
        }),
    }));

    const [, drop] = useDrop(() => ({
        accept: DRAGGABLE_TYPE_MOVE_INGREDIENT,
        canDrop: () => false,
        hover(draggableIngredient: IIngredient) {
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