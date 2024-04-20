const express = require('express');
const directorSchema = require('../models/directores');
const router = express.Router();
const { createItem, traerTodos, traerUno, modificarUno, eliminarUno } = require('../controllers/directores_ctrl')
const { validateCreate } = require('../validators/directores_val')

router.post('/directores', validateCreate, createItem,  (req, res) => {
        console.log('ingresa directores');
});

router.get('/directores', traerTodos,  (req, res) => {
        console.log('ingresa directores');
});

router.get('/directores/:id', traerUno,  (req, res) => {
        console.log('consulta directores');
});

router.put('/directores/:id', validateCreate, modificarUno,  (req, res) => {
        console.log('modifica directores');
});

router.delete('/directores/:id', eliminarUno,  (req, res) => {
        console.log('elimina directores');
});

module.exports = router;



/* const express = require('express');
const directorSchema = require('../models/directores');
const router = express.Router();

// Crear directores
router.post('/directores', (req, res) => {

 console.log('ingresa directores');

    const director = directorSchema(req.body);
    director 
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));

});

module.exports = router; */