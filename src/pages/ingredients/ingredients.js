import {getIngredients} from "../../services/actions/ingredients";
import {useDispatch} from "react-redux";
import {useEffect} from "react";

export const draggableTypeAddIngredient = 'addIngredient';
export const draggableTypeMoveIngredient = 'moveIngredient';

function Ingredients() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getIngredients());
    }, [dispatch]);

    return (
        <>
            Ingredients
        </>
    );
}

export default Ingredients;