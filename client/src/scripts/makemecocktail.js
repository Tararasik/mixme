const cheerio = require("cheerio");
const fetch = require("node-fetch");
const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017";
const dbName = "mixme";

const init = () => {
  MongoClient.connect(url, async (err, client) => {
    const db = client.db(dbName);

    const parseCocktail = async (url) => {
      const buffer = await fetch(url);
      console.log(url);
      const html = await buffer.text();

      const $ = cheerio.load(html);
      const title = $(".title > h1").html();
      if (!title) return;
      console.log(title);
      const glassType = $(".glass_name").html();
      const method = $(".e-instructions").text();
      const img = $(".picture_holder > img").data("fullsize");
      let ingredients = [];
      $(".ingredient_list")
        .eq(0)
        .find($("li"))
        .each((i, el) => {
          const am = $(el).find($(".measure_ml")).text().split(" ");
          ingredients.push({
            amount: am[0],
            measure: am[1],
            name: $(el).find($("a")).text(),
          });
        });

      return {
        title,
        glassType,
        method,
        ingredients,
        img,
      };
    };

    const saveCocktail = async (cocktail) => {
      await db.collection("cocktails").insertOne({ ...cocktail });
    };

    for (let i = 9000; i < 10000; i++) {
      const url = `https://makemeacocktail.com/cocktail/${i}/singapore-sling/`;
      const cocktail = await parseCocktail(url);
      if (cocktail) {
        saveCocktail(cocktail);
      }
    }
  });
};

init();
