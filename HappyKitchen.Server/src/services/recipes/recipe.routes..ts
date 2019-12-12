import { Request, Response } from "express";
import { searchRecipesByQuery } from "./recipe.controller";
import { validateRecipeSearchParams } from "../../middleware/validation";

export default [
  {
    path: "/api/v1/recipes/search",
    method: "get",
    handler: [
      validateRecipeSearchParams,
      async ({ query }: Request, res: Response) => {
        const result = await searchRecipesByQuery(query.q);
        res.status(200).send(result);
      }
    ]
  }
];
