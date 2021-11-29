import {baseRequest} from "./base-request";

const METHOD_POST = 'POST';

export const postRequest = async (url, form) => {
    return baseRequest(METHOD_POST, url, form);
}