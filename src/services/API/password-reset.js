import {API_BASE_URL} from "../actions/root";
import {postRequest} from "./post-request";

const PASSWORD_RESET_URL = API_BASE_URL + 'password-reset';
const PASSWORD_RESET_RESET_URL = API_BASE_URL + 'password-reset/reset';

export const postPasswordReset = async form => {
    return postRequest(PASSWORD_RESET_URL, form);
}

export const postPasswordResetReset = async form => {
    return postRequest(PASSWORD_RESET_RESET_URL, form);
}