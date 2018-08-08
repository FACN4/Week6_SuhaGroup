const http = require("http");
const handlers = require("./handlers.js");
const router = (request, response) => {
  const endpoint = request.url;
  if (
    endpoint === "/" ||

    ["/DOM.js", "/style.css", "/home.html"].includes(endpoint)
  ) {
    console.log(endpoint);
    handlers.handlerPublic(request, response);
  } else if (endpoint === "review") {
    handlers.handlerCity(request, response);
  } else {
    handlers.handler404(response);
  }
};
module.exports = router;
