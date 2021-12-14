import {resolve} from "dns";

const ERROR_MESSAGE = 'Произошла ошибка! Попробуйте позже';

export interface Result {
    success: boolean;
    message?: string
}

export const baseRequest = async (method: string, url: string, form: object) => {
    let result = false;

    await fetch(url,
        {
            method: method,
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

export const showErrorMessage = (result: Result) => {
    alert(result.message ? result.message : ERROR_MESSAGE)
}

export const consoleErrorMessage = (result: Result) => {
    if (result.message) {
        console.warn(result.message);
    } else {
        console.error(ERROR_MESSAGE);
    }
}