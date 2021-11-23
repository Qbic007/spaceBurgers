import {getIngredients} from "../../services/actions/ingredients";
import {useDispatch} from "react-redux";
import {useEffect} from "react";

export const draggableTypeAddIngredient = 'addIngredient';
export const draggableTypeMoveIngredient = 'moveIngredient';

function ForgotPassword() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getIngredients());
    }, [dispatch]);

    return (
        <>
            ForgotPassword
        </>
    );
}

export default ForgotPassword;