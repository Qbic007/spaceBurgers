import {API_BASE_URL} from "./root";

export const GET_INGREDIENTS_SUCCESS: 'GET_INGREDIENTS_SUCCESS' = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_FAILED: 'GET_INGREDIENTS_FAILED' = 'GET_INGREDIENTS_FAILED';

const API_ACTION_URL = API_BASE_URL + 'ingredients';

export function getIngredients() {
    return function (dispatch) {
        fetch(API_ACTION_URL).then((res) => res.json()).then(res => {
            if (res && res.success) {
                dispatch({
                    type: GET_INGREDIENTS_SUCCESS,
                    ingredients: res.data
                });
            } else {
                dispatch({
                    type: GET_INGREDIENTS_FAILED
                });
            }
        }).catch((e) => {
            dispatch({
                type: GET_INGREDIENTS_FAILED
            });
        });
    };
}
