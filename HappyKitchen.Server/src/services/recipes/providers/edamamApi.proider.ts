import { objectToQueryParams } from "../utils";

export interface SearchParams {
  query: string;
  cuisine?: string;
  diet?: string;
  excludeIngredients?: string;
  intolerances?: string;
  offset?: number;
  number?: number;
  limitLicense?: boolean;
  instructionsRequired?: boolean;
}

export interface ISearchRecipeParams {
  q?: string;
  r?: string;
  app_id?: string;
  app_key?: string;
  from?: number;
  to?: number;
  ingr?: number;
  diet?: string;
  health?: string;
  cuisineType?: string;
  mealType?: string;
  dishType?: string;
  calories?: string;
  time?: string;
  excluded?: string;
}

export interface ISearchRecipeResponse {
  uri: string;
  label: string;
  image: string;
  source: string;
  url: string;
  yield: number;
  calories: number;
  totalWeight: number;
  ingredients: number[];
  totalNutrients: INutrientInfo[];
  totalDaily: INutrientInfo[];
  dietLabels: string[];
  healthLabels: string[];
}

export interface INutrientInfo {
  uri: string;
  label: string;
  quantity: number;
  unit: string;
}

export interface IIngredient {
  foodId: string;
  quantity: number;
  measure: IMeasure;
  weight: number;
  food: IFood;
}

export interface IMeasure {
  url: string;
  label: string;
}

export interface IFood {
  foodId: string;
  label: string;
}

const searchRecipeUrl = 'https://api.edamam.com/search;'
const appId = '';
const appKey = '';

console.log(process.env.FOO);

export const recipeApi = (params: SearchParams): Promise<Response> => {
  const paramsString = [
    'apiKey=d13c1bf1dc21411db4c16f6c87dbc225',
    params.query ? `query=${params.query}` : '',
    params.cuisine ? `cuisine=${params.cuisine}` : '',
    params.diet ? `diet=${params.diet}` : '',
    params.excludeIngredients
      ? `excludeIngredients=${params.excludeIngredients}`
      : '',
    params.intolerances ? `intolerances=${params.intolerances}` : '',
    params.offset ? `offset=${params.offset}` : '',
    params.number ? `number=${params.number}` : '',
    params.limitLicense ? `limitLicense=${params.limitLicense}` : '',
    params.instructionsRequired
      ? `instructionsRequired=${params.instructionsRequired}`
      : ''
  ]
    .filter(p => p.length > 0)
    .join('&');

  return fetch(`https://api.spoonacular.com/recipes/search?${paramsString}`);
};

export const searchRecipes = (params: ISearchRecipeParams): Promise<Response> => {
  return fetch(`${searchRecipeUrl}?${objectToQueryParams(params)}`);
};
