import {
    ADD_INGREDIENT, CLEAR_ORDER,
    DROP_INGREDIENT,
    GET_ORDER_FAILED,
    GET_ORDER_SUCCESS,
    MOVE_INGREDIENT
} from '../actions/constructor';
import {typeBun, typeMain, typeSauce} from "./ingredients";

const initialState = {
    bun: null,
    ingredients: [],
    orderNumber: null,
    requestFailed: false,
};

export const constructorReducer = (state = initialState, action) => {
    switch (action.type) {
        case MOVE_INGREDIENT: {
            let ingredients = [...state.ingredients];
            const indexOfIngredient = ingredients.indexOf(action.ingredient);
            const indexOfDraggableIngredient = ingredients.indexOf(action.draggableIngredient);
            let tmp = ingredients[indexOfIngredient];
            ingredients[indexOfIngredient] = ingredients[indexOfDraggableIngredient];
            ingredients[indexOfDraggableIngredient] = tmp;
            return {
                ...state,
                ingredients: ingredients
            }
        }
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
                    item.index = state.ingredients.length;
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
        case CLEAR_ORDER: {
            return {
                ...state,
                ingredients: [],
                bun: null
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