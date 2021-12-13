import {DndProvider} from "react-dnd";
import BurgerIngredients from "../../components/burger-ingredients/burger-ingredients";
import BurgerConstructor from "../../components/burger-constructor/burger-constructor";
import {HTML5Backend} from "react-dnd-html5-backend";
import {getIngredients} from "../../services/actions/ingredients";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import style from "./constructor.module.css";
import Ingredient from "../../components/burger-constructor/ingredient/ingredient";

interface IngredientsReducer {
    ingredients: Ingredient[];
    ingredientsFailed: boolean;
}

interface Store {
    ingredientsReducer: IngredientsReducer;
}

function ConstructorPage() {
    const {ingredients} = useSelector((store: Store) => ({
        ingredients: store.ingredientsReducer.ingredients
    }));

    const dispatch = useDispatch();

    useEffect(() => {
        if (ingredients.length === 0) {
            dispatch(getIngredients());
        }
    }, [ingredients.length, dispatch]);

    return (
        <>
            <main>
                <div className={style.wrapper}>
                    <DndProvider backend={HTML5Backend}>
                        <BurgerIngredients/>
                        <BurgerConstructor/>
                    </DndProvider>
                </div>
            </main>
        </>
    );
}

export default ConstructorPage;