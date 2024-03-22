const express = require('express');
const directorSchema = require('../models/directores');

// Crear director
const createItem = (req, res) => {
 console.log('crea director');
    const director = directorSchema(req.body);
    director 
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
};

// Traer todos los directores
const traerTodos = (req, res) => {
    console.log('trae directores');
    directorSchema
           .find()
           .then((data) => res.json(data))
           .catch((error) => res.json({ message: error }));
   
   };

const traerUno = (req, res) => {
    const { id } = req.params;
    directorSchema
           .findById(id)
           .then((data) => res.json(data))
           .catch((error) => res.json({ message: error }));
   };

const modificarUno = (req, res) => {
    const { id } = req.params;
    const { nombre, estado } = req.body;
    const fecha_actualizacion = Date.now();
    directorSchema
           .updateOne({ _id: id }, { $set: {nombre, estado, fecha_actualizacion} })
           .then((data) => res.json(data))
           .catch((error) => res.json({ message: error }));
   };

const eliminarUno = (req, res) => {
    const { id } = req.params;
    directorSchema
           .deleteOne({ _id: id })
           .then((data) => res.json(data))
           .catch((error) => res.json({ message: error }));
   }; 

module.exports = { createItem, traerTodos, traerUno, modificarUno, eliminarUno }