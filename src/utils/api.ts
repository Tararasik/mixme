const API_URL = "http://localhost:3001/api";

export const getIngredients = (type: string, parentId: string = "0") =>
  fetch(`${API_URL}/ingredients/${type}/${parentId}`).then((res) => res.json());

export const getCocktail = (name: string) =>
  fetch(`${API_URL}/cocktails/${name}`).then((res) => res.json());

export const getAllCocktails = (query?: string) =>
  fetch(`${API_URL}/cocktails?q=${query}`).then((res) => res.json());

export const getCocktailsByIngredients = (ingredients: string[]) =>
  fetch(
    `${API_URL}/cocktails-by-ingredients?ingredients=${ingredients.join(",")}`,
  ).then((res) => res.json());
