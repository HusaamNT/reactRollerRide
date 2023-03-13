const db = require("../config/connection");
const { Bookings } = require("../models");

const tpData = require("../seeds/tpData.json");

db.once("open", async () => {
  await Bookings.deleteMany({});

  const Bookings = await Bookings.insertMany(Bookings);

  console.log("Theme Park Data Seeded!");
  process.exit(0);
});
