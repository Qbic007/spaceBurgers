import {LOG_OUT, LOGIN} from "../actions/auth";

export const REFRESH_TOKEN_ITEM_KEY = 'refreshToken';
export const ACCESS_TOKEN_ITEM_KEY = 'accessToken';

export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case LOGIN:
            localStorage.setItem(REFRESH_TOKEN_ITEM_KEY, action.refreshToken);
            localStorage.setItem(ACCESS_TOKEN_ITEM_KEY, action.accessToken);
            return state;
        case LOG_OUT:
            localStorage.removeItem(REFRESH_TOKEN_ITEM_KEY);
            return state;
        default:
            return state
    }
} 