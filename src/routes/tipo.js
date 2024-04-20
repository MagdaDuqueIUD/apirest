const express = require('express');
const tipoSchema = require('../models/tipos');
const router = express.Router();
const { createItem, traerTodos, traerUno, modificarUno, eliminarUno } = require('../controllers/tipos_ctrl')
const { validateCreate } = require('../validators/tipos_val')

router.post('/tipos', validateCreate, createItem,  (req, res) => {
        console.log('ingresa tipo');
});

router.get('/tipos', traerTodos,  (req, res) => {
        console.log('ingresa tipo');
});

router.get('/tipos/:id', traerUno,  (req, res) => {
        console.log('consulta tipo');
});

router.put('/tipos/:id', validateCreate, modificarUno,  (req, res) => {
        console.log('modifica tipo');
});

router.delete('/tipos/:id', eliminarUno,  (req, res) => {
        console.log('elimina tipo');
});

module.exports = router;





/* const express = require('express');
const tipoSchema = require('../models/tipos');

const router = express.Router();

// Crear tipo
router.post('/tipos', (req, res) => {

 console.log('ingresa tipo');

    const tipo = tipoSchema(req.body);
    tipo 
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));

});

// Traer todos los tipo
router.get('/tipos', (req, res) => {
    console.log('ingresa tipo');
    tipoSchema
           .find()
           .then((data) => res.json(data))
           .catch((error) => res.json({ message: error }));
   
   });

// Traer un tipo por id
router.get('/tipos/:id', (req, res) => {
    const { id } = req.params;
    tipoSchema
           .findById(id)
           .then((data) => res.json(data))
           .catch((error) => res.json({ message: error }));
   }); 

   // Modificar un tipo
router.put('/tipos/:id', (req, res) => {
    const { id } = req.params;
    const { nombre, descripcion } = req.body;
    tipoSchema
           .updateOne({ _id: id }, { $set: {nombre, descripcion} })
           .then((data) => res.json(data))
           .catch((error) => res.json({ message: error }));
   }); 

   // Borrar un tipo
   router.delete('/tipos/:id', (req, res) => {
    const { id } = req.params;
    tipoSchema
           .deleteOne({ _id: id })
           .then((data) => res.json(data))
           .catch((error) => res.json({ message: error }));
   });    

module.exports = router; */