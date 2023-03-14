const express = require("express");
const router = express.Router();
const Weather = require("./Weather");

router.get("/weather", async (req, res) => {
  let weather = new Weather();
  let weatherInfo = await weather.getWeatherInfo();
});
