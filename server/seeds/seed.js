require("dotenv").config();
const db = require("../config/connection");
const { Packages } = require("../models");

const tpData = require("../seeds/tpData.json");

db.once("open", async () => {
  //await Packages.deleteMany({});

  const packagesData = await Packages.insertMany(tpData);

  console.log("Theme Park Data Seeded!");
  process.exit(0);
});
