import {combineReducers} from 'redux';
import {modalReducer} from './modal';

// const initialState = {
//     ingredients: [],
//     constructorIngredients: [],
//     constructorBuns: [],
//     currentIngredient: {},
//     currentOrder: {},
//     showModal: false
// };

export const rootReducer = combineReducers({
    modalReducer
})