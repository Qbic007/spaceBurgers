import {API_BASE_URL} from "./root";
import {ACCESS_TOKEN_ITEM_KEY} from "../reducers/auth";

export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const MOVE_INGREDIENT = 'MOVE_INGREDIENT';
export const DROP_INGREDIENT = 'DROP_INGREDIENT';
export const CLEAR_ORDER = 'CLEAR_ORDER';
export const GET_ORDER_SUCCESS = 'GET_ORDER_SUCCESS';
export const GET_ORDER_FAILED = 'GET_ORDER_FAILED';

const API_ACTION_URL = API_BASE_URL + 'orders';

export function orderConfirmation(ingredients = []) {
    return function (dispatch) {
        fetch(API_ACTION_URL,
            {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': localStorage.getItem(ACCESS_TOKEN_ITEM_KEY)
                },
                body: JSON.stringify({
                    "ingredients": ingredients
                })
            }).then((res) => res.json()).then(res => {
            if (res && res.success) {
                dispatch({
                    type: GET_ORDER_SUCCESS,
                    name: res.name,
                    orderNumber: res.order.number,
                });
            } else {
                dispatch({
                    type: GET_ORDER_FAILED
                });
            }
        }).catch(() => {
            dispatch({
                type: GET_ORDER_FAILED
            });
        });
    };
}