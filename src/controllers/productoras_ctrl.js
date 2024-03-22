const express = require('express');
const productoraSchema = require('../models/productoras');

// Crear productora
const createItem = (req, res) => {
 console.log('crea productora');
    const productora = productoraSchema(req.body);
    productora 
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
};

// Traer todos las productoras
const traerTodos = (req, res) => {
    console.log('trae productoras');
    productoraSchema
           .find()
           .then((data) => res.json(data))
           .catch((error) => res.json({ message: error }));
   
   };

const traerUno = (req, res) => {
    const { id } = req.params;
    productoraSchema
           .findById(id)
           .then((data) => res.json(data))
           .catch((error) => res.json({ message: error }));
   };

const modificarUno = (req, res) => {
    const { id } = req.params;
    const { nombre, estado, descripcion } = req.body;
    const fecha_actualizacion = Date.now();
    productoraSchema
           .updateOne({ _id: id }, { $set: {nombre, estado, descripcion, slogan, fecha_actualizacion} })
           .then((data) => res.json(data))
           .catch((error) => res.json({ message: error }));
   };

const eliminarUno = (req, res) => {
    const { id } = req.params;
    productoraSchema
           .deleteOne({ _id: id })
           .then((data) => res.json(data))
           .catch((error) => res.json({ message: error }));
   }; 

module.exports = { createItem, traerTodos, traerUno, modificarUno, eliminarUno }