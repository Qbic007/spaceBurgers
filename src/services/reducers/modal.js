import {CLOSE_MODAL, SHOW_MODAL} from '../actions/modal';

export const modalIngredient = 'modalIngredient';
export const modalOrder = 'modalOrder';

const initialState = {
    isVisibleOrder: false,
    isVisibleIngredient: false,
    orderInfo: {},
    ingredientInfo: {}
};

export const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case CLOSE_MODAL:
            return initialState;
        case SHOW_MODAL:
            switch (action.modalType) {
                case modalIngredient:
                    return {
                        ...state,
                        isVisibleOrder: false,
                        isVisibleIngredient: true,
                        ingredientInfo: action.ingredientInfo
                    }
                case modalOrder:
                    return {
                        ...state,
                        isVisibleOrder: true,
                        isVisibleIngredient: false,
                        orderInfo: action.orderInfo
                    }
                default:
                    return this.state;
            }
        default:
            return state
    }
} 