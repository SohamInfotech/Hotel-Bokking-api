// routes/hotelRoutes.js
const express = require('express');
const HC = require('../controller/hotal');
const AU =require('../middlewhere/Auth')
const router = express.Router();

router.post('/hotelscreate', HC.createHotel);
router.get('/hotelsget',AU.tokensecure, HC.getAllHotels);
router.get('/hotels/:id',AU.tokensecure, HC.getHotelById);
router.patch('/hotels/:id', HC.updateHotel);
router.delete('/hotels/:id', HC.deleteHotel);

module.exports = router;
