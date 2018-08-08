const fs = require("fs");
const http = require("http");
const getData = require("./queries/getData.js");
const postData = require("./queries/postData.js");
const handler500 = res => {
  res.writeHead(500, { "content-type": "text/plain" });
  res.end("server error");
};
const handlerHome = (request, response) => {
  fs.readFile(__dirname + "/../public/index.html", function(error, file) {
    if (error) {
      response.writeHead(500, "Content-Type:text/html");
      response.end("Sorry, there was a problem loading the homepage");
      console.log(error);
    } else {
      response.writeHead(200, {
        "Content-Type": "text/html"
      });
      response.end(file);
    }
  });
};
const reviewer = (request, response) => {
  getData((err, res) => {
    if (err) {
      response.writeHead(500, "Content-Type:text/html");
      response.end("<h1>Sorry, there was a problem getting the users</h1>");
      console.log(error);
    } else {
      let output = JSON.stringify(res);
      response.writeHead(200, {
        "content-type": "application/json"
      });
      response.end(output);
    }
  });
};
const handler404 = res => {
  fs.readFile(
    path.join(__dirname, "..", "..", "public", "404.html"),

    err => {
      if (err) {
        handler500(res);
        return;
      } else {
        res.writeHead(404, { "content-type": "text/html" });
        res.end("bye");
      }
    }
  );
};

module.exports = [handlerHome, reviewer, handler404, handler500];
