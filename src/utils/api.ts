const API_URL = "http://localhost:3001";

const getIngredients = (type: string, parentId: string = "0") =>
  fetch(`${API_URL}/ingredients/${type}/${parentId}`).then((res) => res.json());

export default {
  getIngredients,
};
