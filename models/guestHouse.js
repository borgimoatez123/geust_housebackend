const mongoose = require('mongoose');

const guestHouseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  numberOfRooms: { type: Number, required: true },
  pictures: [String],
  pictures360: [String],
  phoneNumber: { type: String, required: true },
  isReservable: { type: Boolean, required: true },
});

const GuestHouse = mongoose.model('GuestHouse', guestHouseSchema);

module.exports = GuestHouse;
