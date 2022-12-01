const express = require("express");
const router = express.Router();

const dataController = require("../controllers/xController/dataController.js");

router.get("/getData", dataController.getDataForStockTicker);
router.get("/getNews", dataController.getNewsDataForStockTicker);
module.exports = router;
