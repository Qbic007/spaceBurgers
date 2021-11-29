import {baseRequest} from "./base-request";

const TYPE_POST = 'POST';

export const postRequest = async (url, form) => {
    return baseRequest(TYPE_POST, url, form);
}