const { Schema, Model } = require("mongoose");

const bookingsSchema = new Schema({
  id: mongoose.Schema.Types.ObjectId,
  package: {
    type: String,
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (createdAt) => {
      return new Date(createdAt).toLocaleString();
    },
  },
});

const Bookings = mongoose.model('Bookings', bookingsSchema);

module.exports = Bookings;
