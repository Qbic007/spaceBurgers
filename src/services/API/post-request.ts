import {baseRequest} from "./base-request";

const METHOD_POST = 'POST';

export const postRequest = async (url: string, form: object) => {
    return baseRequest(METHOD_POST, url, form);
}