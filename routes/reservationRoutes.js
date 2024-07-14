const express = require('express');
const router = express.Router();
const reservationController = require('../controllers/reservationController');

// Create a reservation
router.post('/', reservationController.createReservation);

// Update a reservation by ID
router.patch('/:id', reservationController.updateReservation);

// Delete a reservation by ID
router.delete('/:id', reservationController.deleteReservation);
router.patch('/:id/update-date-requested', reservationController.updateDateRequested);

module.exports = router;
