const express = require("express");
const webScrapperController = require("../controllers/webScrapper.controller.js");

const router = express.Router();

router.post("/", webScrapperController.getData);

module.exports = router;
