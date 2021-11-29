import {API_BASE_URL} from "../../actions/root";
import {postRequest} from "../post-request";

const REGISTRATION_URL = API_BASE_URL + 'auth/register';

export const postRegistration = async form => {
    return postRequest(REGISTRATION_URL, form);
}