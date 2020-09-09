const mySql = require("mysql");
const config = require("config");

let db = mySql.createConnection(config.get("db"));

module.exports = () => {
  db.connect((err) => {
    if (err) {
      console.log(err);
    }
    console.log("Conntected to MySQL database");
  });
};
