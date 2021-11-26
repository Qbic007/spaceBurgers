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
import Ingredient from "../../pages/ingredient/ingredient";

export const draggableTypeAddIngredient = 'addIngredient';
export const draggableTypeMoveIngredient = 'moveIngredient';

export const makeLinkUrl = (pathList) => {
    return '/' + pathList.join('/');
}

export const PATH_CONSTRUCTOR = '';
export const PATH_LOGIN = 'login';
export const PATH_REGISTER = 'register';
export const PATH_FORGOT_PASSWORD = 'forgot-password';
export const PATH_RESET_PASSWORD = 'reset-password';
export const PATH_PROFILE = 'profile';
export const PATH_INGREDIENTS = 'ingredients';
export const PATH_ORDERS = 'orders';
export const PATH_NOT_FOUND_404 = '*';

function App() {
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(getIngredients());
    }, [dispatch]);

    return (
        <BrowserRouter>
            <Routes>
                <Route path={PATH_CONSTRUCTOR} element={<Constructor/>}/>
                <Route path={PATH_LOGIN} element={<Login/>}/>
                <Route path={PATH_REGISTER} element={<Register/>}/>
                <Route path={PATH_FORGOT_PASSWORD} element={<ForgotPassword/>}/>
                <Route path={PATH_RESET_PASSWORD} element={<ResetPassword/>}/>
                <Route path={PATH_PROFILE} element={<Profile/>}/>
                <Route path={PATH_INGREDIENTS + '/:id'} element={<Ingredient/>}/>
                <Route path={PATH_ORDERS} element={<NotFound404/>}/>
                <Route path={PATH_NOT_FOUND_404} element={<NotFound404/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;