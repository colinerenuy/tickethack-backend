var express = require('express');
var router = express.Router();
const Booking = require('../models/booking');
require('../models/connection');


router.get('/', (req,res) => {
    Booking.find().then(data => {
        res.json({ trips :data })
    })
}
)

router.post('/', (req, res) => {

    const newBooking = new Booking({
        departure: `${req.body.departure}`,
        arrival: `${req.body.arrival}`,
        date: `${req.body.date}`,
        price: `${req.body.price}`,
       });
       
       newBooking.save().then(() => {
        console.log('Added to booking!');
       });

    res.json({ AddedToBooking: newBooking });
   });

module.exports = router;