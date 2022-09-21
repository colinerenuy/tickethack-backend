const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
 tripInCart: {type: mongoose.Schema.Types.ObjectId, ref: 'trips' },
 isPaid: Boolean
});

const Cart = mongoose.model('cart', cartSchema);

module.exports = Cart;