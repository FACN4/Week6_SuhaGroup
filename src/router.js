const http = require("http");
const handlers = require("./handlers.js");
const router = (request, response) => {
  const endpoint = request.url;
  if (
    endpoint === "/" ||
    [
      "/DOM.js",
      "/style.css",
      "/index.html",
      "/searchSite.html",
      "/home.html"
    ].includes(endpoint)
  ) {
    handlers.handlerPublic(request, response);
  } else if (
    endpoint === "Nazareth" ||
    "Ramallah" ||
    "Bethlehem" ||
    "Jerusalem" ||
    "Acre" ||
    "Haifa"
  ) {
    handlers.handlerCity(request, response);
  } else {
    handlers.handler404(response);
  }
};
module.exports = router;
