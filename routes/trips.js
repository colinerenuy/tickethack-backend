var express = require('express');
var router = express.Router();
const Trip = require('../models/trips');
require('../models/connection');
const moment = require('moment');


router.get('/', (req, res) => {
    const {departure, arrival, date} = req.query;
    console.log(departure);
    const myDate = new Date(date);
    console.log(myDate.valueOf());
    //const tripDate = moment(date, moment.defaultFormat).toDate().toISOString().split('T')[0];
   // console.log(tripDate);
   // console.log(tripDate.valueOf())
    
    Trip.find({departure: departure, arrival: arrival})
    .then(data => {
        console.log(data)
        const tripOnDate = data.filter(trip => {
            const tripDate = moment(trip.date, moment.defaultFormat).toDate().toISOString().split('T')[0];
            const dateFormat = new Date(tripDate);
            return dateFormat.valueOf() == myDate.valueOf();
        })
        console.log(tripOnDate)
        res.json({ trips: tripOnDate });
    });
   });

   module.exports = router;