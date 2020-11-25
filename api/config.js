module.exports = {
  DB_URL: `mongodb://${process.env.MONGODB_HOST || "localhost"}:27017`,
  DB_NAME: "mixme",
};
