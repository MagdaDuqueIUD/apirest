const express = require('express');
const productoraSchema = require('../models/productoras');
const router = express.Router();
const { createItem, traerTodos, traerUno, modificarUno, eliminarUno } = require('../controllers/productoras_ctrl')
const { validateCreate } = require('../validators/productoras_val')

router.post('/productoras', validateCreate, createItem,  (req, res) => {
        console.log('ingresa productora');
});

router.get('/productoras', traerTodos,  (req, res) => {
        console.log('ingresa productora');
});

router.get('/productoras/:id', traerUno,  (req, res) => {
        console.log('consulta productora');
});

router.put('/productoras/:id', validateCreate, modificarUno,  (req, res) => {
        console.log('modifica productora');
});

router.delete('/productoras/:id', eliminarUno,  (req, res) => {
        console.log('elimina productora');
});

module.exports = router;




/* const express = require('express');
const productoraSchema = require('../models/productoras');

const router = express.Router();

// Crear género
router.post('/productoras', (req, res) => {

 console.log('ingresa productora');

    const productora = productoraSchema(req.body);
    productora 
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));

});

// Traer todos los productora
router.get('/productoras', (req, res) => {
    console.log('ingresa productora');
    productoraSchema
           .find()
           .then((data) => res.json(data))
           .catch((error) => res.json({ message: error }));
   
   });

// Traer un productora por id
router.get('/productoras/:id', (req, res) => {
    const { id } = req.params;
    productoraSchema
           .findById(id)
           .then((data) => res.json(data))
           .catch((error) => res.json({ message: error }));
   }); 

   // Modificar un productora
router.put('/productoras/:id', (req, res) => {
    const { id } = req.params;
    const { nombre, estado, descripcion, slogan } = req.body;
    productoraSchema
           .updateOne({ _id: id }, { $set: {nombre, estado, descripcion, slogan} })
           .then((data) => res.json(data))
           .catch((error) => res.json({ message: error }));
   }); 

   // Borrar un productora
   router.delete('/productoras/:id', (req, res) => {
    const { id } = req.params;
    productoraSchema
           .deleteOne({ _id: id })
           .then((data) => res.json(data))
           .catch((error) => res.json({ message: error }));
   });    

module.exports = router; */