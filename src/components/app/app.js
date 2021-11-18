import React from "react";
import AppHeader from "../app-header/app-header";
import style from './app.module.css';
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import {useDispatch} from "react-redux";
import {getIngredients} from "../../services/actions/ingredients";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {NotFound404} from '../../pages/not-found-404';

export const draggableTypeAddIngredient = 'addIngredient';
export const draggableTypeMoveIngredient = 'moveIngredient';

function App() {
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(getIngredients());
    }, [dispatch]);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<NotFound404 />} />                
            </Routes>
        </Router>
    );
}

export default App;

    <Route path={`/list/:country/:personId`}>
        <>
            <AppHeader/>
            <main>
                <div className={style.wrapper}>
                    <DndProvider backend={HTML5Backend}>
                        <BurgerIngredients/>
                        <BurgerConstructor/>
                    </DndProvider>
                </div>
            </main>
        </>
    </Route>