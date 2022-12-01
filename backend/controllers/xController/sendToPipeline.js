import axios from "axios";
const sendStockInfo = async (req, res) => {
  data = {
    stockTicker: req.body.stockTicker,
    requestTime: Date.now(),
  };
  const response = await axios.post("", param);
};
