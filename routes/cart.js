var express = require('express');
var router = express.Router();
const Cart = require('../models/cart');
require('../models/connection');


router.get('/', (req,res) => {
    Cart.find().then(data => {
        res.json({ cart :data })
    })
}
)

router.post('/', (req, res) => {

    const newCart = new Cart({
        departure: `${req.body.departure}`,
        arrival: `${req.body.arrival}`,
        date: `${req.body.date}`,
        price: `${req.body.price}`,
       });
       
       newCart.save().then(() => {
        console.log('Added to cart!');
       });

    res.json({ AddedToCart: newCart });
   });


module.exports = router;