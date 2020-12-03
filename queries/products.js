const express = require("express");
const { db } = require("../startup/db");
const router = express.Router();

router.get("/populateProducts", (req, res) => {
  const sql =
    "INSERT INTO products (name, description, imagePath, price, windows, cpu, graphics, ram, hdd) VALUES ?";
  const values = [
    [
      "ALIENWARE AURORA R11 GAMING DESKTOP",
      "The Alienware Aurora R11 is engineered with 10th Gen Intel® Core™ processors, optional liquid-cooled graphics and multiple upgrade options to achieve peak performance that lasts.",
      "/frontEnd/src/assets/img/Alienware R11 Desktop.webp",
      "$$3,659.99",
      "Windows 10 Home",
      "10th Gen Intel® Core™ i9 10900F",
      "NVIDIA® GeForce RTX™ 3080 10GB GDDR6X",
      "16GB Dual Channel HyperX™ FURY DDR4 XMP at 2933MHz; up to 64GB",
      "512GB M.2 PCIe NVMe SSD (Boot) + 1TB 7200RPM SATA 6Gb/s (Storage)",
    ],
  ];
  db.query(sql, [values], (err, res) => {
    if (err) throw err;
    console.log(res);
  });
});

router.get("/", (req, res) => {
  const sql = "SELECT * FROM products";
  db.query(sql, (err, res) => {
    if (err) console.log(errs);
    console.log(res);
  });
});

// router.get("/:id", (req, res) => {
//   const sql = "SELECT * FROM Products where productId = ?";
//   db.query(sql, [parseInt(req.params.id)], (err, res) => {
//     if (err) console.log(err);
//     console.log(res[0]);
//   });
// });

module.exports = router;
