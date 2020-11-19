const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017";
const dbName = "mixme";

MongoClient.connect(url, async (err, client) => {
  const db = client.db(dbName);
  const res = await db.collection("cocktails").find({}).toArray();

  res.forEach(async (item, i) => {
    const newIngredints = item.ingredients.map((ingr) => {
      return {
        ...ingr,
        name: ingr.name.toLowerCase(),
      };
    });

    await db
      .collection("cocktails")
      .updateOne({ _id: item._id }, { $set: { ingredients: newIngredints } });
  });
});
