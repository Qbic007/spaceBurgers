import {LOG_OUT, REGISTER} from "../actions/auth";

const initialState = {
    user: {
        email: "",
        name: ""
    },
    accessToken: ""
}

const REFRESH_TOKEN_ITEM_KEY = 'refreshToken';

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER:
            localStorage.setItem(REFRESH_TOKEN_ITEM_KEY, action.refreshToken);
            return {
                user: action.user,
                accessToken: action.accessToken
            }
        case LOG_OUT:
            localStorage.removeItem(REFRESH_TOKEN_ITEM_KEY);
            return initialState;
        default:
            return state
    }
} 