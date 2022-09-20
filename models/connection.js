const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://renuycoline:Zk477854@cluster0.5hmjn6x.mongodb.net/tickethack';

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
 .then(() => console.log('Database connected'))

  .catch(error => console.error(error));