import {ADD_INGREDIENT, DROP_INGREDIENT, GET_ORDER_FAILED, GET_ORDER_SUCCESS} from '../actions/constructor';
import {typeBun, typeMain, typeSauce} from "./ingredients";

const initialState = {
    bun: null,
    ingredients: [],
    orderNumber: null,
    requestFailed: false,
};

export const constructorReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_INGREDIENT: {
            const item = {...action.item};
            item.key = Date.now() + item._id;
            switch (item.type) {
                case typeBun:
                    return {
                        ...state,
                        bun: item
                    }
                case typeMain:
                case typeSauce:
                    return {
                        ...state,
                        ingredients: [
                            ...state.ingredients,
                            item
                        ]
                    }
                default:
                    return state
            }
        }
        case DROP_INGREDIENT: {
            return {
                ...state,
                ingredients: [...state.ingredients.filter(function (ingredient) {
                    return ingredient.key !== action.key;
                })]
            }
        }
        case GET_ORDER_SUCCESS: {
            return {
                ...state,
                requestFailed: false,
                name: action.name,
                orderNumber: action.orderNumber
            };
        }
        case GET_ORDER_FAILED: {
            return {
                ...state,
                requestFailed: true
            };
        }
        default:
            return state
    }
} 