const mySql = require("mysql");
const config = require("config");

const db = mySql.createConnection(config.get("db"));

exports.db = db;
exports.dbConnection = () => {
  db.connect((err) => {
    if (err) {
      console.log(err);
    }
    console.log("Conntected to MySQL database");
  });
};
