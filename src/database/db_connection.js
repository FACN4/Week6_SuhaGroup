const { Pool } = require("pg");
const url = require("url");
require("env2")("./config.env");

if (!process.env.DB_URL) {
  throw new Error("Enviroment variable DB_URL must be set");
}

const params = url.parse(process.env.DB_URL);

const options = {
  connectionString: process.env.DB_URL
};

options.ssl = options.host !== "localhost";

module.exports = new Pool(options);
