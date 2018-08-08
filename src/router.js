const http = require("http")
const handlers = require("./handlers.js")
const getData=require("./queries")
let city = "nazareth";
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
    endpoint === "/Nazareth" ||
    endpoint ===  "/Ramallah" ||
    endpoint ===  "/Bethlehem" ||
  endpoint ===    "/Jerusalem" ||
    endpoint ===  "/Acre" ||
  endpoint ===    "/Haifa"
  ) {

    city=endpoint.slice(1);
    handlers.handlerCity(request, response);
  }else if(endpoint==="/get_places"){
  //  getData(city,())
  } else {
    handlers.handler404(response);
  }
};
module.exports = router;
