import {REGISTER} from "../actions/auth";

const initialState = {
    user: {
        email: "",
        name: ""
    },
    accessToken: ""
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER:
            return {
                user: action.user,
                accessToken: action.accessToken
            }
        default:
            return state
    }
} 