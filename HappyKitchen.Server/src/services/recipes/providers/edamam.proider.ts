import request from "request-promise";
import dotenv from "dotenv";

dotenv.config();

export const searchRecipes = async (q: string) => {
  const apiId = process.env.EDAMAM_APP_ID;
  const apiKey = process.env.EDAMAM_APP_KEY;
  const url = `https://api.edamam.com/search?q=${q}&app_id=${apiId}&app_key=${apiKey}`;

  const response = await request(url);

  return JSON.parse(response);
};
