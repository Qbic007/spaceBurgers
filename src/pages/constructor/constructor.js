import {DndProvider} from "react-dnd";
import BurgerIngredients from "../../components/burger-ingredients/burger-ingredients";
import BurgerConstructor from "../../components/burger-constructor/burger-constructor";
import {HTML5Backend} from "react-dnd-html5-backend";
import AppHeader, {MENU_ITEM_CONSTRUCTOR} from "../../components/app-header/app-header";
import {getIngredients} from "../../services/actions/ingredients";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import style from "./constructor.module.css";

export const draggableTypeAddIngredient = 'addIngredient';
export const draggableTypeMoveIngredient = 'moveIngredient';

function ConstructorPage() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getIngredients());
    }, [dispatch]);

    return (
        <>
            <AppHeader activeMenuItem={MENU_ITEM_CONSTRUCTOR}/>
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