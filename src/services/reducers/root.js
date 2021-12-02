import {combineReducers} from 'redux';
import {modalReducer} from './modal';
import {ingredientsReducer} from './ingredients';
import {constructorReducer} from './constructor';
import {authReducer} from "./auth";
import {locationReducer} from "./location";

export const rootReducer = combineReducers({
    modalReducer,
    ingredientsReducer,
    constructorReducer,
    authReducer,
    locationReducer
})