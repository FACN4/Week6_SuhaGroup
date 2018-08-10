const fs = require("fs");
const http = require("http");
const pg = require("pg");
const queryString = require("querystring");
const path = require("path");
const getData = require("./queries/getData.js");
const postData = require("./queries/postData.js");

const handler500 = res => {
  res.writeHead(500, { "content-type": "text/plain" });
  res.end("server error");
};

const handlerCity = response => {
  fs.readFile(
    path.join(__dirname + "/../public/searchSite.html"),
    (error, file) => {
      if (error) {
        response.writeHead(500, { "Content-type": "text/plain" });
        response.end("Sorry, this site can't be reached");
      } else {
        response.writeHead(200, { "Content-type": "text/html" });
        response.end(file);
      }
    }
  );
};
const handlerPublic = (request, response) => {
  let url = request.url;

  if (url === "/") url = "/home.html";

  let extension = url.split(".")[1];
  let extensionType = {
    html: "text/html",
    css: "text/css",
    js: "application/javascript",
    json: "application/json"
  };

  fs.readFile(path.join(__dirname + "/.." + "/public" + url), function(
    error,
    file
  ) {
    if (error) {
      response.writeHead(500, "Content-Type:text/html");
      response.end("<h1>Sorry, there was a problem loading the homepage</h1>");
      console.log(error);
    } else {
      response.writeHead(200, { "Content-Type": extensionType[extension] });
      response.end(file);
    }
  });
};
const handler404 = res => {
  fs.readFile(
    path.join(__dirname, "/../public/home.html"),

    err => {
      if (err) {
        handler500(res);
        return;
      } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("bye");
      }
    }
  );
};

module.exports = { handlerPublic, handlerCity, handler404, handler500 };
