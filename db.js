const mySql = require("mysql");
// const config = require("config");

const db = mySql.createConnection({
  host: "localhost",
  user: "root",
  password: "Ma2253372",
  database: "gamebox",
});

module.exports = () => {
  db.connect((err) => {
    if (err) {
      console.log(err);
    }
    console.log("Conntected to MySQL database");
  });
};
