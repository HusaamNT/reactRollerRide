const { Schema, Model } = require("mongoose");

const bookingsSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  package: {
    type: String,
    required: true
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  dateField: {
    type: Date
  },
  childrenTickets: {
    type: Number,
    required: true,
    default: 0
  },
  adultTickets: {
    type: Number,
    required: true,
    default: 1
  }
});

const Bookings = mongoose.model('Bookings', bookingsSchema);

module.exports = Bookings;
