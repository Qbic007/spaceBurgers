import {API_BASE_URL} from "../../actions/root";

const REGISTRATION_URL = API_BASE_URL + 'auth/register';

export const postRegistration = async form => {
    let result = false;

    await fetch(REGISTRATION_URL,
        {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        }).then((res) => res.json()).then(res => {
        result = res;
    }).catch(() => {
        result = false
    });

    return result;
}