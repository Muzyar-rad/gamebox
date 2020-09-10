const express = require("express");
const { db } = require("../db");
const router = express.Router();

router.get("/populateProducts", (req, res) => {
  const sql =
    "INSERT INTO products (name, description, imagePath, price) VALUES ?";
  const values = [
    ["Corsair1", "This is an awesome desktop", "/local/c", "$3,999.00"],
    ["Corsair3", "This is an awesome desktop 2", "/local/a", "$2,999.00"],
    ["Aurora10", "This is an awesome desktop 3", "/local/2", "$5,999.00"],
    ["Aurora11", "This is an awesome desktop 4", "/local/d", "$6,999.00"],
  ];
  db.query(sql, [values], (err, res) => {
    if (err) throw err;
    console.log(res);
  });
});

module.exports = router;
