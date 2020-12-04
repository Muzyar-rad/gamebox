const express = require("express");
const { db } = require("../startup/db");
const router = express.Router();

router.get("/populateProducts", (req, res) => {
  const sql =
    "INSERT INTO products (name, description, imagePath, price, windows, cpu, graphics, ram, hdd) VALUES ?";
  const values = [
    [
      "ALIENWARE AURORA R10 GAMING DESKTOP",
      "High-performance desktop with up to 16-core 3rd Gen AMD Ryzen™ overclockable processors designed for gamers who create.",
      "/frontEnd/src/assets/img/Alienware R10 Desktop.webp",
      "$2,146.19",
      "Windows 10 Home 64-bit English",
      "AMD Ryzen™ 7 3700X (8-Core, 32MB L3 Cache, Max Boost Clock of 4.4GHz)",
      "NVIDIA® GeForce RTX™ 3080 10GB GDDR6X",
      "16GB Dual Channel HyperX™ FURY DDR4 XMP at 2933MHz; up to 64GB (additional memory sold separately)",
      "512GB M.2 PCIe NVMe SSD",
    ],
    [
      "ALIENWARE AURORA R11 GAMING DESKTOP",
      "The Alienware Aurora R11 is engineered with 10th Gen Intel® Core™ processors, optional liquid-cooled graphics and multiple upgrade options to achieve peak performance that lasts.",
      "/frontEnd/src/assets/img/Alienware R11 Desktop.webp",
      "$3,659.99",
      "Windows 10 Home",
      "10th Gen Intel® Core™ i9 10900F",
      "NVIDIA® GeForce RTX™ 3080 10GB GDDR6X",
      "16GB Dual Channel HyperX™ FURY DDR4 XMP at 2933MHz; up to 64GB",
      "512GB M.2 PCIe NVMe SSD (Boot) + 1TB 7200RPM SATA 6Gb/s (Storage)",
    ],
    [
      "ALIENWARE AURORA RYZEN™ EDITION R10 GAMING DESKTOP",
      "High-performance desktop with up to 16-core 3rd Gen AMD Ryzen™ overclockable processors designed for gamers who create.",
      "/frontEnd/src/assets/img/Alienware R10 Desktop.webp",
      "$2,146.19",
      "Windows 10 Home 64-bit English",
      "AMD Ryzen™ 7 3700X (8-Core, 32MB L3 Cache, Max Boost Clock of 4.4GHz)",
      "NVIDIA® GeForce RTX™ 3080 10GB GDDR6X",
      "16GB Dual Channel HyperX™ FURY DDR4 XMP at 2933MHz; up to 64GB (additional memory sold separately)",
      "512GB M.2 PCIe NVMe SSD",
    ],
    [
      "ALIENWARE AREA-51M R2 GAMING LAPTOP",
      "World's most powerful and overclockable gaming laptop. Featuring up to 10th Gen Intel® Core™ i9K processors.",
      "/frontEnd/src/assets/img/Alienware Area 51m Laptop.jpg",
      "$4,478.59",
      "Windows 10 Home, 64-bit, English",
      "10th Gen Intel® Core™ i9 10900K (10-Core, 20MB Cache, 3.7GHz to 5.3GHz w/Thermal Velocity Boost)",
      "NVIDIA® GeForce® RTX 2080 SUPER™ 8GB GDDR6",
      "32GB Dual Channel DDR4 at 2933MHz; up to 64GB (additional memory sold separately)",
      "2TB RAID 0 (2x 1TB NVMe M.2 PCIe SSDs)",
    ],
    [
      "ALIENWARE M17 R3 GAMING LAPTOP",
      "Alienware’s thin 17-inch laptop with maximum-performance graphics. Featuring up to 12-phase graphics voltage regulation and reengineered Cryo-Tech cooling.",
      "/frontEnd/src/assets/img/Alienware M17 Laptop.webp",
      "$2,302.99",
      "Windows 10 Home, 64-bit, English",
      "10th Generation Intel® Core™ i7-10875H (8-Core, 16MB Cache, up to 5.1GHz w/ Turbo Boost 2.0)",
      "NVIDIA® GeForce RTX™ 2070 8GB GDDR6",
      "32GB DDR4 2666MHz",
      "1TB (2x 512GB PCIe M.2 SSD) RAID0 [Boot] + 512GB PCIe M.2 SSD",
    ],
    [
      "Dell G5 Gaming Desktop",
      "Powerful, compact gaming desktop with easy upgradeability; up to 10th Gen Intel® Core™ i9 CPUs, VR-capable GPUs, up to 128GB DDR4 RAM, and optional clear panel chassis.",
      "/frontEnd/src/assets/img/Dell G5 Gaming Desktop.webp",
      "$1,832.59",
      "Windows 10 Home, 64-bit, English",
      "10th Gen Intel® Core™ i7-10700F processor(8-Core, 16M Cache, 2.9GHz to 4.8GHz)",
      "NVIDIA® GeForce RTX™ 3070 8GB GDDR6",
      "16GB, 2x8GB, DDR4, 2933Mhz",
      "512GB M.2 PCIe NVMe Solid State Drive",
    ],
    [
      "CORSAIR i7200 Gaming PC",
      "Step up your game with a CORSAIR VENGEANCE i7200 Series Gaming PC, built with a full range of award-winning CORSAIR components, and powered by a 10th Gen Intel® Core™ processor",
      "/frontEnd/src/assets/img/corsair vengeance 7200i.png_515Wx515H",
      "$3,999.99",
      "Windows 10 Home, 64-bit, English",
      "INTEL® CORE i9-10850K",
      "GEFORCE RTX 3090",
      "32GB VENGEANCE RGB PRO 3200MHZ",
      "1TB HIGH-SPEED M.2 NVME SSD",
    ],
    [
      "Razer Blade 15 Base Edition",
      "More Power. More Frames. Making sure that you are reading this, Congrats if you did™",
      "/frontEnd/src/assets/img/Razer Blade 15 Gaming Laptop.webp",
      "$1,499.99",
      "Windows 10 Home",
      "10th Gen Intel® Core™ i7-10750H 6 Core (2.6GHz/5.0GHz)",
      "NVIDIA® GeForce GTX 1660 Ti (6GB GDDR6 VRAM)",
      "16GB Dual-Channel (8GB x 2) DDR4-2933MHz",
      "256GB SSD (M.2 NVMe PCIe 3.0 x4) + Open M.2 Slot (Supports PCIe 3.0 x4 or SATA)",
    ],
    [
      "T1 RACE 2018 Gaming Chair",
      "The CORSAIR T1 RACE 2018 chair features a wide seat, tall back, and two-layer custom color accents, giving you the style, comfort and endurance you need for long-haul gaming sessions.",
      "/frontEnd/src/assets/img/T1 Race 2018 Gaming Chair.webp",
      "$249.99",
      null,
      null,
      null,
      null,
      null,
    ],
    [
      "Alienware 34 Curved Gaming Monitor",
      "34 inch gaming monitor with the full colors brought by IPS Nano Color (98% DCI-P3) technology and a 2ms response time. Featuring a 1900R WQHD resolution and 21:9 display ratio.",
      "/frontEnd/src/assets/img/Alienware 34 Curved Gaming Monitor.webp",
      "$1,139.99",
      null,
      null,
      null,
      null,
      null,
    ],
    [
      "K95 RGB PLATINUM Mechanical Gaming Keyboard",
      "CORSAIR K95 RGB PLATINUM features CHERRY® MX Speed keyswitches backed by a lightweight aluminum frame. 8MB profile storage with hardware macro and lighting playback enable profile access independent of external software.",
      "/frontEnd/src/assets/img/K95 RGB PLATINUM Mechanical Gaming Keyboard.webp",
      "$199.99",
      null,
      null,
      null,
      null,
      null,
    ],
    [
      "VOID PRO RGB Wireless Premium Gaming Headset",
      "The VOID PRO RGB Wireless headset provides exceptional comfort, epic audio performance and legendary CORSAIR durability to deliver the ultimate gaming experience.",
      "/frontEnd/src/assets/img/OID PRO RGB Wireless Premium Gaming Headset.webp",
      "$99.99",
      null,
      null,
      null,
      null,
      null,
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
    return res;
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
