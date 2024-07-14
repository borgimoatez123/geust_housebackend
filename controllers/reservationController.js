const Reservation = require('../models/reservation');

// Create a new reservation
const createReservation = async (req, res) => {
  const { user, guestHouse, status } = req.body;

  try {
    const newReservation = new Reservation({
      user,
      guestHouse,
      status,
      dateRequested
    });

    await newReservation.save();
    res.status(201).json(newReservation);
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
};

// Update an existing reservation by ID
const updateReservation = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const reservation = await Reservation.findByIdAndUpdate(id, { status }, { new: true });

    if (!reservation) {
      return res.status(404).json({ error: 'Reservation not found' });
    }

    res.json(reservation);
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
};

// Delete a reservation by ID
const deleteReservation = async (req, res) => {
  const { id } = req.params;

  try {
    const reservation = await Reservation.findByIdAndDelete(id);

    if (!reservation) {
      return res.status(404).json({ error: 'Reservation not found' });
    }

    res.json({ message: 'Reservation deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
};
const updateDateRequested = async (req, res) => {
    const { id } = req.params;
  
    try {
      const reservation = await Reservation.findByIdAndUpdate(id, { dateRequested: Date.now() }, { new: true });
  
      if (!reservation) {
        return res.status(404).json({ error: 'Reservation not found' });
      }
  
      res.json(reservation);
    } catch (error) {
      res.status(500).json({ error: 'Server Error' });
    }
  };
module.exports = {
  createReservation,
  updateReservation,
  deleteReservation,
  updateDateRequested
};
