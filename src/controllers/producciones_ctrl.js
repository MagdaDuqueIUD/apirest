const express = require('express');
const produccionSchema = require('../models/producciones');

// Crear produccion
const createItem = (req, res) => {
 console.log('crea producción');
    const produccion = produccionSchema(req.body);
    produccion.fecha_creacion =  Date.now(); 
       
    produccion 
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
};


// Traer todos las producciones
const traerTodos = (req, res) => {
    console.log('trae producciones');
    produccionSchema
           .find()
           .then((data) => res.json(data))
           .catch((error) => res.json({ message: error }));
   
   };

const traerUno = (req, res) => {
    const { id } = req.params;
    produccionSchema
           .findById(id)
           .then((data) => res.json(data))
           .catch((error) => res.json({ message: error }));
   };

const modificarUno = (req, res) => {
    const { id } = req.params;
    const { titulo, sinopsis, url, estreno, genero, director, productora, tipo } = req.body;
    const fecha_actualizacion = Date.now();
    produccionSchema
           .updateOne({ _id: id }, { $set: {titulo, sinopsis, url, estreno, genero, director, productora, tipo, fecha_actualizacion} })
           .then((data) => res.json(data))
           .catch((error) => res.json({ message: error }));
   };

const eliminarUno = (req, res) => {
    const { id } = req.params;
    produccionSchema
           .deleteOne({ _id: id })
           .then((data) => res.json(data))
           .catch((error) => res.json({ message: error }));
   }; 

module.exports = { createItem, traerTodos, traerUno, modificarUno, eliminarUno }