const Koa = require("koa");
const Router = require("koa-router");
const cors = require("@koa/cors");
const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017";
const dbName = "mixme";

const app = new Koa();
const router = new Router();

MongoClient.connect(url, async (err, client) => {
  const db = client.db(dbName);
  app.use(cors({ origin: "*" }));

  const ingredients = require("./routes/ingredients");

  router.get("/ingredients/:type/:parentId", (ctx) => ingredients(ctx, db));

  router.get("/", (ctx, next) => {
    ctx.body = "Hello World!";
  });

  app.use(router.routes()).use(router.allowedMethods());

  console.log("Listening on http://localhost:3001");
  app.listen(3001);
});
