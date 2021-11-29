import {API_BASE_URL} from "../../actions/root";
import {postRequest} from "../post-request";

const LOG_OUT = API_BASE_URL + 'auth/logout';

export const postLogOut = async form => {
    return postRequest(LOG_OUT, form);
}