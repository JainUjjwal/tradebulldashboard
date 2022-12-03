const grabData = require("./grabData");

const getDataForStockTicker = async (req, res) => {
  const ticker = req.query.ticker;
  let today_bars;
  const options = {
    start: req.query.startTime, // 1 day ago
    end: req.query.endTime, // Current date
    timeframe: req.query.timeframe,
  };
  console.log("getting data for requested stock symbol: ", ticker);
  if (ticker == undefined || ticker == null || ticker.length < 1) {
    res.status(400).send("Unknown stock symbol");
    return;
  }
  if (req.query.flag == "true") {
    today_bars = await grabData.getLatestBars(ticker);
    console.log(req.query.flag);
  }
  grabData.getHistoricalBars(ticker, options).then((bars) => {
    if (bars) {
      if (today_bars) {
        bars.push(today_bars);
      }
      res.status(200).send(bars);
    } else {
      res.status(400).send("Unable to grab data for ticker");
    }
  });
};

const getNewsDataForStockTicker = async (req, res) => {
  const symbol = [req.query.ticker];
  const options = {
    symbols: symbol,
    start: req.query.startTime,
    end: req.query.endTime,
  };
  grabData.getStockNews(options).then((data) => {
    if (data) {
      res.status(200).send(data);
    } else {
      res.status(400).send("Error");
    }
  });
};
const getAccountInformationForUser = (req, res) => {
  grabData.getAccountInformation().then((data) => {
    if (data) {
      res.status(200).send(data);
    } else {
      res.status(400).send("Error");
    }
  });
};

const getOrderInformation = (req, res) => {
  const options = {
    status: "all",
    after: new Date(req.query.startTime),
    until: new Date(req.query.endTime),
  };
  grabData.getAllOrders(options).then((data) => {
    if (data) {
      res.status(200).send(data);
    } else {
      res.status(400).send("Error");
    }
  });
};

const getAccountPositionsForUser = (req, res) => {
  grabData.getAccountPositions().then((data) => {
    if (data) {
      res.status(200).send(data);
    } else {
      res.status(400).send("Error");
    }
  });
};
module.exports = {
  getDataForStockTicker,
  getNewsDataForStockTicker,
  getAccountInformationForUser,
  getOrderInformation,
  getAccountPositionsForUser,
};
