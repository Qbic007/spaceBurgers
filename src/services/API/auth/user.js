import {API_BASE_URL} from "../../actions/root";

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
        result = res;
    }).catch(() => {
        result = false
    });

    return result;
}

export const patchUser = async (form, token) => {
    let result = false;

    await fetch(USER_URL,
        {
            method: METHOD_PATCH,
            headers: {
                'Authorization': token
            },
            body: JSON.stringify(form)
        }).then((res) => res.json()).then(res => {
        result = res;
    }).catch(() => {
        result = false
    });

    return result;
}