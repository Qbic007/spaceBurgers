import {API_BASE_URL} from "../../actions/root";
import {baseRequest} from "../base-request";

const USER_URL = API_BASE_URL + 'auth/user';

const METHOD_GET = 'GET';
const METHOD_PATCH = 'PATCH';

export const getUser = async form => {
    return baseRequest(METHOD_GET, USER_URL, form);
}

export const patchUser = async form => {
    return baseRequest(METHOD_PATCH, USER_URL, form);
}