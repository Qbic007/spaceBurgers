import {LOG_OUT, LOGIN} from "../actions/auth";

const initialState = {
    user: {
        email: "",
        name: ""
    },
    accessToken: ""
}

export const REFRESH_TOKEN_ITEM_KEY = 'refreshToken';

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
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