import {API_BASE_URL} from "../../actions/root";
import {postRequest} from "../post-request";

const LOGIN_URL = API_BASE_URL + 'auth/login';

export const postLogin = async (form: object) => {
    return postRequest(LOGIN_URL, form);
}