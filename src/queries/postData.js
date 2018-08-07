const dbConnection = require("../database/db_connection.js");

const postData = (text, id_place, stars, cb) => {
  dbConnection.query(
    "INSERT INTO reviews (text, id_place, stars) VALUES ($1, $2, $3)",
    [text, id_place, stars],
    (err, res) => {
      if (err) {
        return cb(err);
      } else {
        cb(null, res);
      }
    }
  );
};

module.exports = postData;
