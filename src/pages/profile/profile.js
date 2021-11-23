import {getIngredients} from "../../services/actions/ingredients";
import {useDispatch} from "react-redux";
import {useEffect} from "react";

export const draggableTypeAddIngredient = 'addIngredient';
export const draggableTypeMoveIngredient = 'moveIngredient';

function Profile() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getIngredients());
    }, [dispatch]);

    return (
        <>
            Profile
        </>
    );
}

export default Profile;