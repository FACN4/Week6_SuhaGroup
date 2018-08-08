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
const handlerCity = (request, response) => {
  getData((err, res) => {
    if (err) {
      response.writeHead(500, "Content-Type:text/html");
      response.end("<h1>Sorry, there was a problem getting the users</h1>");
      console.log(err);
    } else {
      let output = JSON.stringify(res);
      response.writeHead(200, {
        "content-type": "application/json"
      });
      response.end(output);
      console.log(response);
    }
  });
};
const handlerPublic = (request, response) => {
  let url = request.url;
  if (url === "/") url = "/index.html";
  let extension = url.split(".")[1];
  let extensionType = {
    html: "text/html",
    css: "text/css",
    js: "application/javascript",
    json: "application/json"
  };
  console.log(url);
  fs.readFile(__dirname + "/.." + "/public" + url, function(error, file) {
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
    path.join(__dirname, "/../public/index.html"),

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
