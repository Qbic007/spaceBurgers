import {GET_INGREDIENTS_FAILED, GET_INGREDIENTS_SUCCESS} from '../actions/ingredients';

export const TYPE_BUN = 'bun';
export const TYPE_SAUCE = 'sauce';
export const TYPE_MAIN = 'main';

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