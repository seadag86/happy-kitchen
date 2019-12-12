import { searchRecipes } from "./providers/edamam.proider";

export const searchRecipesByQuery: any = async (q: string) => {
  if (q.length < 3) {
    console.log("query not long enough");
    return {
      type: "FeatureCollection",
      features: []
    };
  }

  return await searchRecipes(q);
};
