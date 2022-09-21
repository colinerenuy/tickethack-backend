const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://admin:6j7WWku@cluster0.kxlhi5q.mongodb.net/tickethack';

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
 .then(() => console.log('Database connected'))

  .catch(error => console.error(error));
