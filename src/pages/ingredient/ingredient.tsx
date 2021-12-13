import IngredientDetails, {IngredientInfo} from "../../components/ingredient-details/ingredient-details";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getIngredients} from "../../services/actions/ingredients";
import {useParams} from "react-router-dom";
import style from "./ingredient.module.css";
import Ingredient from "../../components/burger-constructor/ingredient/ingredient";

interface IngredientsReducer {
    ingredients: Ingredient[];
    ingredientsFailed: boolean;
}

interface Store {
    ingredientsReducer: IngredientsReducer;
}

function IngredientPage() {
    const {id} = useParams();

    const {ingredients} = useSelector((store: Store) => ({
        ingredients: store.ingredientsReducer.ingredients
    }));

    const dispatch = useDispatch();

    useEffect(() => {
        if (ingredients.length === 0) {
            dispatch(getIngredients());
        }
    }, [ingredients.length, dispatch]);

    const ingredient = ingredients.find((element: Ingredient) => {
        return element._id === id
    });

    const ingredientInfo: IngredientInfo = {
        ...ingredient,
        title: 'Детали ингредиента'
    }


    return (
        <>
            <main>
                <div className={style.wrapper}>
                    <section className={style.ingredientContainer}>
                        <IngredientDetails ingredientInfo={ingredientInfo}/>
                    </section>
                </div>
            </main>
        </>
    );
}

export default IngredientPage;