const express = require("express");
const config = require("config");
const { dbConnection } = require("./db");
const app = express();

dbConnection();

const port = process.env.PORT || config.get("port");
app.listen(port, () => console.log(`Listening on ${port}...`));
