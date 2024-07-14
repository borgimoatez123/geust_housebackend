const express = require('express');
const router = express.Router();
const guestHouseController = require('../controllers/guestHouseController');

router.get('/', guestHouseController.getAllGuestHouses);
router.get('/:id', guestHouseController.getGuestHouseById);
router.post('/', guestHouseController.createGuestHouse);

module.exports = router;
