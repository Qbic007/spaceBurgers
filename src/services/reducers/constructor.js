import {ADD_INGREDIENT} from '../actions/constructor';

const initialState = {
    bun: {
        calories: 420,
        carbohydrates: 53,
        fat: 24,
        image: "https://code.s3.yandex.net/react/code/bun-02.png",
        image_large: "https://code.s3.yandex.net/react/code/bun-02-large.png",
        image_mobile: "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
        name: "Краторная булка N-200i",
        price: 1255,
        proteins: 80,
        type: "bun",
        __v: 0,
        _id: "60d3b41abdacab0026a733c6"
    },
    ingredients: [
        {
            calories: 77,
            carbohydrates: 55,
            fat: 5,
            image: "https://code.s3.yandex.net/react/code/sp_1.png",
            image_large: "https://code.s3.yandex.net/react/code/sp_1-large.png",
            image_mobile: "https://code.s3.yandex.net/react/code/sp_1-mobile.png",
            name: "Плоды Фалленианского дерева",
            price: 874,
            proteins: 20,
            type: "main",
            __v: 0,
            _id: "60d3b41abdacab0026a733d1"
        },
        {
            calories: 643,
            carbohydrates: 85,
            fat: 26,
            image: "https://code.s3.yandex.net/react/code/meat-03.png",
            image_large: "https://code.s3.yandex.net/react/code/meat-03-large.png",
            image_mobile: "https://code.s3.yandex.net/react/code/meat-03-mobile.png",
            name: "Филе Люминесцентного тетраодонтимформа",
            price: 988,
            proteins: 44,
            type: "main",
            __v: 0,
            _id: "60d3b41abdacab0026a733c8"
        },
        {
            calories: 99,
            carbohydrates: 42,
            fat: 24,
            image: "https://code.s3.yandex.net/react/code/sauce-03.png",
            image_large: "https://code.s3.yandex.net/react/code/sauce-03-large.png",
            image_mobile: "https://code.s3.yandex.net/react/code/sauce-03-mobile.png",
            name: "Соус традиционный галактический",
            price: 15,
            proteins: 42,
            type: "sauce",
            __v: 0,
            _id: "60d3b41abdacab0026a733ce"
        }
    ],
};

export const constructorReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_INGREDIENT: {
            return {
                ...state,
                ingredientsRequest: true
            };
        }
        default:
            return state
    }
} 