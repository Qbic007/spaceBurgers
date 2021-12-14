import {API_BASE_URL} from "../../actions/root";
import {postRequest} from "../post-request";
import {REFRESH_TOKEN_ITEM_KEY} from "../../reducers/auth";


const TOKEN_URL = API_BASE_URL + 'auth/token';

export const MESSAGE_TOKEN_EXPIRED = 'jwt expired';

export const postToken = async () => {
    return postRequest(TOKEN_URL, {
        token: localStorage.getItem(REFRESH_TOKEN_ITEM_KEY)
    });
}