const Alpaca = require("@alpacahq/alpaca-trade-api");
API_KEY = "PK9GBVU29COBWZ39VXXS";
API_SECRET = "JwUexu1sMIUvyek6taJgSmyRGqxccF1I6t6PN2tY";

const alpaca = new Alpaca({
  keyId: API_KEY,
  secretKey: API_SECRET,
  paper: true,
});

async function getHistoricalBars(symbol, options) {
  let bars = [];
  let resp = alpaca.getBarsV2(symbol, options);
  for await (let bar of resp) {
    bars.push(bar);
  }
  return bars;
}

async function getLatestBars(symbol) {
  let resp = await alpaca.getLatestBar(symbol);
  return resp;
}

async function getStockNews(options) {
  const resp = await alpaca.getNews(options);
  return resp;
}

async function getAccountInformation() {
  const resp = await alpaca.getAccount();
  return resp;
}
async function getAllOrders(options) {
  const resp = await alpaca.getOrders(options);
  return resp;
}
async function getAccountPositions() {
  const resp = await alpaca.getPositions();
  return resp;
}
module.exports = {
  getHistoricalBars,
  getLatestBars,
  getStockNews,
  getAccountInformation,
  getAllOrders,
  getAccountPositions,
};
