import {combineReducers} from 'redux';
import {modalReducer} from './modal';
import {ingredientsReducer} from './ingredients';
import {constructorReducer} from './constructor';

export const rootReducer = combineReducers({
    modalReducer,
    ingredientsReducer,
    constructorReducer
})