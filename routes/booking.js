// routes/bookingRoutes.js
const express = require('express');
const BC = require('../controller/booking');
const AU = require('../middlewhere/Auth')
const router = express.Router();

router.post('/bookings', BC.createBooking);
router.get('/bookings', AU.tokensecure, BC.getAllBookings);
router.get('/bookings/:id', AU.tokensecure, BC.getBookingById);
router.patch('/bookings/:id/status', BC.updateBookingStatus);

module.exports = router;

