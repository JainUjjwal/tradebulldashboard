const express = require("express");
const router = express.Router();

const dataController = require("../controllers/xController/dataController.js");

router.get("/getData", dataController.getDataForStockTicker);
router.get("/getNews", dataController.getNewsDataForStockTicker);
router.get("/getAccount", dataController.getAccountInformationForUser);
router.get("/getOrders", dataController.getOrderInformation);
router.get("/getPositions", dataController.getAccountPositionsForUser);
module.exports = router;
