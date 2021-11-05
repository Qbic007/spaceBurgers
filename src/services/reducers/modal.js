import { CLOSE_MODAL, SHOW_MODAL } from '../actions/modal';

export const modalIngredient = 'modalIngredient';
export const modalOrder = 'modalOrder';

const initialState = {
    isVisibleOrder: false,
    isVisibleIngredient: false
};

export const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case CLOSE_MODAL:
            return initialState;
        case SHOW_MODAL:
            switch (action.modalType) {
                case modalIngredient:
                    return {
                        isVisibleOrder: false,
                        isVisibleIngredient: true
                    }
                case modalOrder:
                    return {
                        isVisibleOrder: true,
                        isVisibleIngredient: false
                    }
                default:
                    return this.state;
            }
        default:
            return state
    }
} 