const express = require('express');
const generoSchema = require('../models/generos');
const router = express.Router();
const { createItem, traerTodos, traerUno, modificarUno, eliminarUno } = require('../controllers/generos_ctrl')
const { validateCreate } = require('../validators/generos_val')

router.post('/generos', validateCreate, createItem,  (req, res) => {
        console.log('ingresa género');
});

router.get('/generos', traerTodos,  (req, res) => {
        console.log('ingresa género');
});

router.get('/generos/:id', traerUno,  (req, res) => {
        console.log('consulta género');
});

router.put('/generos/:id', validateCreate, modificarUno,  (req, res) => {
        console.log('modifica género');
});

router.delete('/generos/:id', eliminarUno,  (req, res) => {
        console.log('elimina género');
});

module.exports = router;