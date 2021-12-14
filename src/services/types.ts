export type TIngredientType = 'bun' | 'sauce' | 'main';

export interface IIngredient {
    _id: string;
    key: string;
    name: string;
    price: number;
    image: string;
    image_large: string;
    calories: string;
    proteins: string;
    fat: string;
    carbohydrates: string;
    alt: string;
    type: TIngredientType;
}

export interface IIngredientInfo {
    title: string;
    name?: string | undefined;
    image_large?: string | undefined;
    calories?: string | number | undefined;
    proteins?: string | number | undefined;
    fat?: string | number | undefined;
    carbohydrates?: string | number | undefined;
}

export interface IConstructorReducer {
    ingredients: IIngredient[];
    bun: IIngredient;
    orderNumber: number;
}

export interface IModalReducer {
    isVisibleIngredient: boolean;
    isVisibleOrder: boolean;
    ingredientInfo: IIngredientInfo;
}

export interface IngredientsReducer {
    ingredients: IIngredient[];
    ingredientsFailed: boolean;
}

export interface IStore {
    modalReducer: IModalReducer;
    constructorReducer: IConstructorReducer;
    ingredientsReducer: IngredientsReducer;
}