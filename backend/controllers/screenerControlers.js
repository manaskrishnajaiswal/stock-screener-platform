import asyncHandler from "express-async-handler";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

// @desc    Get stock data
// @route   GET /api/yahoo-finance
// @access  Private
const getStockData = asyncHandler(async (req, res) => {
  const options = {
    method: "GET",
    url: "https://yh-finance.p.rapidapi.com/stock/v2/get-chart",
    params: {
      interval: "5m",
      symbol: "HDFCBANK.NS",
      range: "1d",
      region: "IN",
    },
    headers: {
      "X-RapidAPI-Key": "374b95c1ddmshe2330bc5c04fc98p15bbe5jsna88ba2996178",
      "X-RapidAPI-Host": "yh-finance.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      res.send(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
});

export { getStockData };
