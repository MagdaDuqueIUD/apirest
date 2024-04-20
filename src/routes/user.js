const express = require('express');
const userSchema = require('../models/users');

const router = express.Router();

// Crear usuario
router.post('/users', (req, res) => {
    //res.send('Crear usuario');

 console.log('ingresa');

    const user = userSchema(req.body);
    user 
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));

});

module.exports = router;