var express = require('express');
var router = express.Router();
const Cart = require('../models/cart');
const Trip = require('../models/trips');
require('../models/connection');

function getHour(date) {
    const tripDate = new Date(date)
    const hoursMinutes = ((tripDate.getHours()<10?'0':'') + tripDate.getHours()) + ':' + ((tripDate.getMinutes()<10?'0':'') + tripDate.getMinutes()) ;
    return hoursMinutes
}

router.post('/', (req, res) => {
    console.log(req.body);
    let date = new Date(req.body.date);
    console.log(req.body.price);
    Trip.find({departure: `${req.body.departure}`, arrival: `${req.body.arrival}`, price: `${req.body.price}`})
    .then(data => {
        console.log(data)

       const tripsWithoutHour = data.filter(obj => {
        const tripDate = obj.date.toISOString().split('T')[0];
        const tripDateFormat = new Date(tripDate);
        return tripDateFormat.valueOf() == date.valueOf()
        })

        const tripToCart = tripsWithoutHour.find(obj => {
            const searchedHour = req.body.time;
            const dbHour = getHour(new Date(obj.date));
            console.log(searchedHour);
            console.log(dbHour);
            return dbHour == searchedHour
        })

        console.log(tripToCart)
        console.log(tripToCart.id)

        const newCart = new Cart({
            tripInCart: tripToCart.id,
            isPaid: false,
           });
           
           newCart.save().then(() => {
            console.log('Added to cart!');

           });
    })
    

   });


module.exports = router;