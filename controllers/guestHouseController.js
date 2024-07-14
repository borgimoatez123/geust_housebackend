const GuestHouse = require('../models/guestHouse');

const getAllGuestHouses = async (req, res) => {
  try {
    const guestHouses = await GuestHouse.find();
    res.json(guestHouses);
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
};

const getGuestHouseById = async (req, res) => {
  try {
    const guestHouse = await GuestHouse.findById(req.params.id);
    if (!guestHouse) {
      return res.status(404).json({ error: 'Guest House not found' });
    }
    res.json(guestHouse);
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
};

const createGuestHouse = async (req, res) => {
  const { name, location, numberOfRooms, pictures, pictures360, phoneNumber, isReservable } = req.body;

  try {
    const newGuestHouse = new GuestHouse({
      name,
      location,
      numberOfRooms,
      pictures,
      pictures360,
      phoneNumber,
      isReservable,
    });

    await newGuestHouse.save();
    res.status(201).json(newGuestHouse);
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
};

module.exports = {
  getAllGuestHouses,
  getGuestHouseById,
  createGuestHouse,
};
