const mySql = require("mysql");
const config = require("config");

const setConfig = (value) => {
  return config.get(value);
};
let db = mySql.createConnection({
  host: "localhost",
  user: setConfig("user"),
  password: setConfig("password"),
  database: setConfig("database"),
});

module.exports = () => {
  db.connect((err) => {
    if (err) {
      console.log(err);
    }
    console.log("Conntected to MySQL database");
  });
};
