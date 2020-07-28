const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017";
const dbName = "mixme";

MongoClient.connect(url, async (err, client) => {
  const db = client.db(dbName);
  const res = await db.collection("cocktails").find({}).toArray();

  res.forEach(async (item) => {
    const newIngredints = item.ingredients.map((ingr) => ({
      name: ingr.name.toLowerCase().trim(),
      amount: ingr.amount.toLowerCase().trim(),
    }));
    await db
      .collection("cocktails")
      .updateOne({ id: item.id }, { $set: { ingredients: newIngredints } });
  });
});
