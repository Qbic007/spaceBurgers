import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import NotFound404Page from '../../pages/not-found404-page';
import ConstructorPage from "../../pages/constructor/constructor";
import LoginPage from "../../pages/profile/login/login";
import RegisterPage from "../../pages/profile/register/register";
import ForgotPasswordPage from "../../pages/profile/forgot-password/forgot-password";
import ResetPasswordPage from "../../pages/profile/reset-password/reset-password";
import ProfilePage from "../../pages/profile/profile";
import IngredientPage from "../../pages/ingredient/ingredient";
import {ProtectedRoute} from "../../pages/protected/protected-page-no-auth";

export const DRAGGABLE_TYPE_ADD_INGREDIENT = 'addIngredient';
export const DRAGGABLE_TYPE_MOVE_INGREDIENT = 'moveIngredient';

export const PATH_CONSTRUCTOR = '';
export const PATH_LOGIN = 'login';
export const PATH_REGISTER = 'register';
export const PATH_FORGOT_PASSWORD = 'forgot-password';
export const PATH_RESET_PASSWORD = 'reset-password';
export const PATH_PROFILE = 'profile';
export const PATH_INGREDIENTS = 'ingredients';
export const PATH_ORDERS = 'orders';
export const PATH_NOT_FOUND_404 = '*';

const PATH_ID = ':id';

export const makeLinkUrl = (pathParts) => {
    return '/' + (Array.isArray(pathParts) ? pathParts.join('/') : pathParts);
}

export const makeOrdersLinkUrl = () => makeLinkUrl([PATH_PROFILE, PATH_ORDERS]);

export const makeOrderLinkUrl = (id) => makeLinkUrl([makeOrdersLinkUrl(), id]);

export const makeIngredientLinkUrl = (id) => makeLinkUrl([PATH_INGREDIENTS, id]);

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={PATH_CONSTRUCTOR} element={<ConstructorPage/>}/>
                <Route path={makeIngredientLinkUrl(PATH_ID)} element={<IngredientPage/>}/>
                <Route path={PATH_LOGIN} element={<LoginPage/>}/>
                <Route path={PATH_REGISTER} element={<RegisterPage/>}/>
                <Route path={PATH_FORGOT_PASSWORD} element={<ForgotPasswordPage/>}/>
                <Route path={PATH_RESET_PASSWORD} element={<ResetPasswordPage/>}/>
                <Route path={PATH_PROFILE} element={<ProfilePage/>}/>
                <Route path={makeOrdersLinkUrl()} element={<NotFound404Page/>}/>
                <Route path={makeOrderLinkUrl(PATH_ID)} element={<NotFound404Page/>}/>
                <Route path={PATH_NOT_FOUND_404} element={<NotFound404Page/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;