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

export const recipeApi = (params: SearchParams): Promise<Response> => {
  const paramsString = [
    "apiKey=d13c1bf1dc21411db4c16f6c87dbc225",
    params.query ? `query=${params.query}` : "query=popular",
    params.cuisine ? `cuisine=${params.cuisine}` : "",
    params.diet ? `diet=${params.diet}` : "",
    params.excludeIngredients
      ? `excludeIngredients=${params.excludeIngredients}`
      : "",
    params.intolerances ? `intolerances=${params.intolerances}` : "",
    params.offset ? `offset=${params.offset}` : "",
    params.number ? `number=${params.number}` : "",
    params.limitLicense ? `limitLicense=${params.limitLicense}` : "",
    params.instructionsRequired
      ? `instructionsRequired=${params.instructionsRequired}`
      : ""
  ]
    .filter(p => p.length > 0)
    .join("&");

  return fetch(`https://api.spoonacular.com/recipes/search?${paramsString}`);
};
