import IngredientDetails from "../../components/ingredient-details/ingredient-details";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getIngredients} from "../../services/actions/ingredients";
import {useParams} from "react-router-dom";
import AppHeader, {MENU_ITEM_CONSTRUCTOR} from "../../components/app-header/app-header";
import style from "../constructor/constructor.module.css";

function IngredientPage() {
    const {id} = useParams();

    const {ingredients} = useSelector(store => ({
        ingredients: store.ingredientsReducer.ingredients
    }));

    const dispatch = useDispatch();

    useEffect(() => {
        if (ingredients.length === 0) {
            dispatch(getIngredients());
        }
    }, [ingredients.length, dispatch]);

    const ingredient = ingredients.find((element) => {
        console.log(element);
        return element._id === id
    });

    const ingredientInfo = {
        ...ingredient,
        title: 'Детали ингредиента'
    }


    return (
        <>
            <AppHeader activeMenuItem={MENU_ITEM_CONSTRUCTOR}/>
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