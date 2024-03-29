const express = require("express");
const config = require("config");
const app = express();

require("./startup/db").dbConnection();
require("./startup/cors")(app);
require("./startup/routes")(app);

const port = process.env.PORT || config.get("port");
app.listen(port, () => console.log(`Listening on ${port}...`));
