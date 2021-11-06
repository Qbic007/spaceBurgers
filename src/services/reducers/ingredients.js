import {GET_INGREDIENTS_FAILED, GET_INGREDIENTS_SUCCESS} from '../actions/ingredients';

export const typeBun = 'bun';
export const typeSauce = 'sauce';
export const typeMain = 'main';

const initialState = {
    ingredients: [],
    ingredientsFailed: false,
};

export const ingredientsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_INGREDIENTS_SUCCESS: {
            return {
                ...state,
                ingredientsFailed: false,
                ingredients: action.ingredients
            };
        }
        case GET_INGREDIENTS_FAILED: {
            return {
                ...state,
                ingredientsFailed: true
            };
        }
        default:
            return state
    }
} 