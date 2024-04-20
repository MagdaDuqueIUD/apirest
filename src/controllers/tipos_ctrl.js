const express = require('express');
const tipoSchema = require('../models/tipos');

// Crear tipo
const createItem = (req, res) => {
 console.log('crea tipo');
    const tipo = tipoSchema(req.body);
    tipo 
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
};

// Traer todos los tipos
const traerTodos = (req, res) => {
    console.log('trae tipos');
    tipoSchema
           .find()
           .then((data) => res.json(data))
           .catch((error) => res.json({ message: error }));
   
   };

const traerUno = (req, res) => {
    const { id } = req.params;
    tipoSchema
           .findById(id)
           .then((data) => res.json(data))
           .catch((error) => res.json({ message: error }));
   };

const modificarUno = (req, res) => {
    const { id } = req.params;
    const { nombre, estado } = req.body;
    const fecha_actualizacion = Date.now();
    tipoSchema
           .updateOne({ _id: id }, { $set: {nombre, estado, fecha_actualizacion} })
           .then((data) => res.json(data))
           .catch((error) => res.json({ message: error }));
   };

const eliminarUno = (req, res) => {
    const { id } = req.params;
    tipoSchema
           .deleteOne({ _id: id })
           .then((data) => res.json(data))
           .catch((error) => res.json({ message: error }));
   }; 

module.exports = { createItem, traerTodos, traerUno, modificarUno, eliminarUno }