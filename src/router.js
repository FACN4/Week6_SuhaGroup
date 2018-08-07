const http = require("http");
const pg = require("pg");
const handlers = require("./handlers.js");
const queryString = require("querystring");

const router = (request, response) => {
  const endpoint = request.url.split("/")[1];
  if (endpoint === "") {
    handlerHome(response);
  } else if (endpoint === "reviews") {
    reviewer(response);
  }
};
module.exports = router;
