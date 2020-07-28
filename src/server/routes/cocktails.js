const arrayContainsAnotherArray = (needle, haystack) => {
  for (var i = 0; i < needle.length; i++) {
    if (haystack.indexOf(needle[i]) === -1) return false;
  }

  return true;
};

const getCocktail = async (ctx, db) => {
  const { name } = ctx.params;
  const cocktail = await db
    .collection("cocktails")
    .findOne({ name: { $regex: name.replace(/-/g, " "), $options: "i" } });

  ctx.body = cocktail;
};

const allCocktails = async (ctx, db) => {
  const { q } = ctx.query;

  let query = {};
  if (q) {
    query = { name: { $regex: q, $options: "i" } };
  }

  const cocktails = await db
    .collection("cocktails")
    .find(query)
    .sort({ name: 1 })
    .toArray();

  ctx.body = cocktails;
};

const cocktailsByIngredients = async (ctx, db) => {
  const { ingredients } = ctx.query;
  if (!ingredients) {
    return;
  }
  const barIngredients = ingredients.split(",");
  const [firstIngredient, ...restIngredients] = barIngredients;

  let cocktails = await db
    .collection("cocktails")
    .find({ "ingredients.name": firstIngredient })
    .toArray();

  if (restIngredients) {
    cocktails = cocktails.filter((cocktail) => {
      const cocktailIngredients = cocktail.ingredients.map((i) => i.name);
      return arrayContainsAnotherArray(barIngredients, cocktailIngredients);
    });
  }

  ctx.body = cocktails;
};

module.exports = {
  getCocktail,
  allCocktails,
  cocktailsByIngredients,
};
