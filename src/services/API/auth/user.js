import {API_BASE_URL} from "../../actions/root";
import {baseRequest} from "../base-request";

const USER_URL = API_BASE_URL + 'auth/user';

const METHOD_GET = 'GET';
const METHOD_PATCH = 'PATCH';

export const getUser = async token => {
    let result = false;

    await fetch(USER_URL,
        {
            method: METHOD_GET,
            headers: {
                'Authorization': token
            }
        }).then((res) => res.json()).then(res => {
        console.log(result);
        result = res;
    }).catch(() => {
        console.log('brr');
        result = false
    });

    return result;
}

export const patchUser = async form => {
    return baseRequest(METHOD_PATCH, USER_URL, form);
}