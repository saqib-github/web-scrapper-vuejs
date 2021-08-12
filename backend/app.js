const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");

const webScrapperRoute = require("./routes/webScrapper.route.js");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(cors());

app.use("/web", webScrapperRoute);

//middleware

console.log("app listning on port 5000");
app.listen(5000);
