import React from "react";
import {useDispatch} from "react-redux";
import {getIngredients} from "../../services/actions/ingredients";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {NotFound404} from '../../pages/not-found-404';
import Constructor from "../../pages/constructor/constructor";
import Login from "../../pages/login/login";
import Register from "../../pages/register/register";
import ForgotPassword from "../../pages/forgot-password/forgot-password";
import ResetPassword from "../../pages/reset-password/reset-password";
import Profile from "../../pages/profile/profile";
import Ingredient from "../burger-constructor/ingredient/ingredient";
import Ingredients from "../../pages/ingredients/ingredients";

export const draggableTypeAddIngredient = 'addIngredient';
export const draggableTypeMoveIngredient = 'moveIngredient';

function App() {
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(getIngredients());
    }, [dispatch]);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Constructor/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="register" element={<Register/>}/>
                <Route path="forgot-password" element={<ForgotPassword/>}/>
                <Route path="reset-password" element={<ResetPassword/>}/>
                <Route path="profile" element={<Profile/>}/>
                <Route path="ingredients" element={<Ingredients/>}>
                    <Route path=":id" element={<Ingredient/>}/>
                </Route>
                <Route element={<NotFound404/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;