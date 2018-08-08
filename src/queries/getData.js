const dbConnection = require("../database/db_connection.js");
const getData = (place_id,cb) => {
  dbConnection.query(`SELECT * FROM review where place_id=$1`,[place_id], (err, res) => {

    if (err) {
      cb(err);
    } else {
      console.log(res.rows);
      cb(null, res.rows);
    }
  });
};

module.exports = getData;



//
// const getDAta = require("getData");
//
// getdata((eror,result)=>{
//   if(error){
//    res.wrteHEAD(500k)
//  }else{
//    resultres
//  }
// })
