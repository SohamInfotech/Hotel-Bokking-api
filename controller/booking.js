// controllers/bookingController.js
const Booking = require('../modal/booking');
const Hotel = require('../modal/hotal');

// Create a new booking
exports.createBooking = async (req, res) => {
  try {
    const { hotelId, guestName, guestEmail, checkInDate, checkOutDate, numberOfGuests, totalAmount } = req.body;

    // Check if the hotel exists
    const hotel = await Hotel.findById(hotelId);
    if (!hotel) {
      return res.status(404).json({ message: 'Hotel not found' });
    }

    // Create the booking
    const booking = new Booking({
      hotelId,
      guestName,
      guestEmail,
      checkInDate,
      checkOutDate,
      numberOfGuests,
      totalAmount,
    });

    // Save the booking to the database
    await booking.save();
    res.status(201).json(booking);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get all bookings
exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().populate('hotelId', 'name location'); 
    res.status(200).json(bookings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get a specific booking by ID
exports.getBookingById = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id).populate('hotelId', 'name location');
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }
    res.status(200).json(booking);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};


exports.updateBookingStatus = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true } // Return the updated document
    );
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }
    res.status(200).json(booking);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
