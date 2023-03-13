const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const packageSchema = new Schema({
  ticketName: {
    type: String,
    required: true,
  },
  passType: {
    type: String,
    required: true,
  },
  ticketPrice: {
    type: Number,
    required: true,
  },
});

const Package = model("packages", packageSchema);

module.exports = Package;
