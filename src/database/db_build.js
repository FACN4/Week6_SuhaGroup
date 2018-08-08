const fs = require("fs");
const dbConnection = require("./db_connection");

const file = fs.readFileSync(__dirname + "/db_build.sql", "utf8");

dbConnection.query(file, (error, result) => {
  if (error) {
    console.log("Error", error);
  } else {
    console.log("success");
  }
});
