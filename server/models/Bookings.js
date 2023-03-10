const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const bookingsSchema = new Schema({
  package: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Packages",
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  dateField: {
    type: String,
  },
  childrenTickets: {
    type: Number,
    required: true,
    default: 0,
  },
  adultTickets: {
    type: Number,
    required: true,
    default: 1,
  },
});

const Bookings = model("Bookings", bookingsSchema);

module.exports = Bookings;
