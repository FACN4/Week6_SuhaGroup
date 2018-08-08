const { Pool } = require("pg");
const url = require("url");
require("env2")("./config.env");

if (!process.env.DB_URL_URL) {
  throw new Error("Enviroment variable DB_URL must be set");
}

const params = url.parse(process.env.DB_URL_URL);

const options = {
  connectionString: process.env.DB_URL_URL
};


module.exports = new Pool(options);
