import axios from "axios";

const url = "http://localhost:3001";

export const fetchData = async (
  ticker,
  startTime,
  endTime,
  timeframe,
  flag
) => {
  const params = {
    ticker: ticker,
    startTime: startTime,
    endTime: endTime,
    timeframe: timeframe,
    flag: flag,
  };
  return await axios.get(url + "/getData", { params: params });
};

export const formatData = (data) => {
  let output = [];
  for (let i = 0; i < data.length; i++) {
    const entry = {
      x: new Date(Date.parse(data[i].Timestamp)),
      y: [
        data[i].OpenPrice,
        data[i].HighPrice,
        data[i].LowPrice,
        data[i].ClosePrice,
      ],
    };
    output[i] = entry;
  }
  return output;
};
export const fetchNewsData = async (ticker, startTime, endTime) => {
  const params = {
    ticker: ticker,
    startTime: startTime,
    endTime: endTime,
  };
  return await axios.get(url + "/getNews", { params: params });
};
