const fs = require("fs");
const dbConnection = require("./dbConnection");

const file = fs.readFileSync(__dirname + "/build.sql", "utf8");

dbConnection.query(file, (error, result) => {
  if (error) {
    console.log("Error", error);
  } else {
    console.log("success");
  }
});
