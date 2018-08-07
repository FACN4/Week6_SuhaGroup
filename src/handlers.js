const fs = require("fs");
const http = require("http");
const getData = require("./queries/getData.js");
const postData = require("./queries/postData.js");
const deleteData = require("./queries/deleteData");
const handlerHome = response => {
  fs.readFile(__dirname + "/../public/index.html", function(error, file) {
    if (error) {
      response.writeHead(500, "Content-Type:text/html");
      response.end("<h1>Sorry, there was a problem loading the homepage</h1>");
      console.log(error);
    } else {
      response.writeHead(200, {
        "Content-Type": "text/html"
      });
      response.end(file);
    }
  });
};
const reviewer = response => {
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
module.exports = [handlerHome, reviewer];
