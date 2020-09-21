import { API_URL } from "../config";

const url = `${API_URL}/api`;

export const getIngredients = (type: string, parentId: string = "0") =>
  fetch(`${url}/ingredients/${type}/${parentId}`).then((res) => res.json());

export const getCocktail = (name: string) =>
  fetch(`${url}/cocktails/${name}`).then((res) => res.json());

export const getAllCocktails = (query?: string) =>
  fetch(`${url}/cocktails?q=${query}`).then((res) => res.json());

export const getCocktailsByIngredients = (ingredients: string[]) =>
  fetch(
    `${url}/cocktails-by-ingredients?ingredients=${ingredients.join(",")}`,
  ).then((res) => res.json());
