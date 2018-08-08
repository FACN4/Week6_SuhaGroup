const http = require("http");
const pg = require("pg");
const handlers = require("./handlers.js");
const queryString = require("querystring");

const router = (request, response) => {
  const endpoint = request.url.split("/")[1];
  if (endpoint === "/") {
    handlers.handlerHome(request, response);
  } else if (endpoint === "reviews") {
    handlers.reviewer(request, response);
  } else {
    handlers.handler404(response);
  }
};
module.exports = router;
