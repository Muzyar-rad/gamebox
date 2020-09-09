const express = require("express");
const mySql = require("mysql");
const app = express();

const db = mySql.createConnection({
  host: "localhost",
  user: "root",
  password: "Ma2253372",
  database: "gamebox",
});

db.connect((err) => {
  if (err) {
    console.log(err);
  }
  console.log("Conntected to MySQL database");
});
app.listen(3000, () => console.log("Listening on 3000..."));
