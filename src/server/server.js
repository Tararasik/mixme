const Koa = require("koa");
const Router = require("koa-router");
const cors = require("@koa/cors");
const MongoClient = require("mongodb").MongoClient;

const { DB_NAME, DB_URL } = require("../config");

const {
  getCocktail,
  allCocktails,
  cocktailsByIngredients,
} = require("./routes/cocktails");
const ingredients = require("./routes/ingredients");

const app = new Koa();
const router = new Router();

MongoClient.connect(
  DB_URL,
  { useUnifiedTopology: true },
  async (err, client) => {
    if (err) {
      console.log(err);
    }
    const db = client.db(DB_NAME);
    app.use(cors({ origin: "*" }));

    router.get("/api/cocktails/:name", (ctx) => getCocktail(ctx, db));
    router.get("/api/cocktails", (ctx) => allCocktails(ctx, db));
    router.get("/api/ingredients/:type/:parentId", (ctx) =>
      ingredients(ctx, db),
    );
    router.get("/api/cocktails-by-ingredients", (ctx) =>
      cocktailsByIngredients(ctx, db),
    );

    router.get("/cocktails", (ctx, next) => {
      ctx.body = "Hello World!";
    });

    app.use(router.routes()).use(router.allowedMethods());

    console.log("Listening on http://localhost:3001");
    app.listen(3001);
  },
);
