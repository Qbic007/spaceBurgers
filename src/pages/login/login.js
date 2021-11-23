import {getIngredients} from "../../services/actions/ingredients";
import {useDispatch} from "react-redux";
import {useEffect} from "react";

export const draggableTypeAddIngredient = 'addIngredient';
export const draggableTypeMoveIngredient = 'moveIngredient';

function Login() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getIngredients());
    }, [dispatch]);

    return (
        <>
            login
        </>
    );
}

export default Login;