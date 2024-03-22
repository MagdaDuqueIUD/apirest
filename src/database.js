const mongoose = require('mongoose');
require('dotenv').config();

mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log('Conectado a la base de datos MongoDB Atlas.'))
    .catch((error) => console.error(error))




   
