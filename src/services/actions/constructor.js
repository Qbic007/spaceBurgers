export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const GET_ORDER_SUCCESS = 'GET_ORDER_SUCCESS';
export const GET_ORDER_FAILED = 'GET_ORDER_FAILED';

const API_URL = 'https://norma.nomoreparties.space/api/orders';

export function orderConfirmation(ingredients = []) {
    return function (dispatch) {
        fetch(API_URL,
            {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "ingredients": ingredients
                })
            }).then((res) => res.json()).then(res => {
            if (res && res.success) {
                dispatch({
                    type: GET_ORDER_SUCCESS,
                    name: res.name,
                    number: res.order.number,
                });
            } else {
                dispatch({
                    type: GET_ORDER_FAILED
                });
            }
        }).catch((e) => {
            dispatch({
                type: GET_ORDER_FAILED
            });
        });
    };
}