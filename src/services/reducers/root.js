import {combineReducers} from 'redux';
import {modalReducer} from './modal';
import {ingredientsReducer} from './ingredients';

export const rootReducer = combineReducers({
    modalReducer,
    ingredientsReducer
})