import {API_BASE_URL} from "../../actions/root";
import {postRequest} from "../post-request";

const LOGOUT_URL = API_BASE_URL + 'auth/logout';

export const postLogOut = async form => {
    return postRequest(LOGOUT_URL, form);
}