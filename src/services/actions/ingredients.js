export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_FAILED = 'GET_INGREDIENTS_FAILED';

const API_URL = 'https://norma.nomoreparties.space/api/ingredients';

export function getIngredients() {
    return function (dispatch) {
        fetch(API_URL).then((res) => res.json()).then(res => {
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