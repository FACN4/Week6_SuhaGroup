const dbConnection = require("../database/db_connection.js");

const postData = (text, id_place, stars, cb) => {
  dbConnection.query(
    "INSERT INTO review (rev_dis, place_id, stars) VALUES ($1, $2, $3)",
    [rev_dis, place_id, stars],
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
