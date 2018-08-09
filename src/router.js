const http = require("http");
const handlers = require("./handlers.js");
const getData = require("./queries/getData");
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
      "/home.html",
      "/xhr.js"
    ].includes(endpoint)
  ) {
    handlers.handlerPublic(request, response);
  } else if (
    endpoint === "/Nazareth" ||
    endpoint === "/Ramallah" ||
    endpoint === "/Bethlehem" ||
    endpoint === "/Jerusalem" ||
    endpoint === "/Acre" ||
    endpoint === "/Haifa"
  ) {
    city = endpoint.slice(1);
    handlers.handlerCity(response);
  } else if (endpoint === "/get_places") {
    console.log("city", city);
    id = {
      Haifa: 1,
      Jerusalem: 2,
      Nazareth: 3,
      Akko: 4,
      Bethlehem: 5,
      Ramallah: 6
    }[city];
    console.log(id);
    getData(id, (error, rows) => {
      if (error) {
        console.log(error);
        response.writeHead(200, "Content-Type:application/json");
        response.end(JSON.stringify({ error: "sorry, something went wrong" }));
      } else {
        response.writeHead(200, "Content-Type:application/json");
        response.end(
          JSON.stringify({
            reviews: rows,
            city
          })
        );
      }
    });
  } else {
    handlers.handler404(response);
  }
};
module.exports = router;
