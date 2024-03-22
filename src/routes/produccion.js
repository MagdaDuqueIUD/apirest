const express = require('express');
const produccionSchema = require('../models/producciones');
const router = express.Router();
const { createItem, traerTodos, traerUno, modificarUno, eliminarUno } = require('../controllers/producciones_ctrl')
const { validateCreate } = require('../validators/producciones_val')
const cors = require('cors');
const sharp = require('sharp');
const multer = require('multer');

const guardar = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, './public/uploads')  // Imagen original
        },
        filename: (req, file, cb) => {
            const ext = file.originalname.split('.').pop() // retorna la extensión del archivo cargado
            cb(null, `${Date.now()}.${ext}`)
        }
    })    


const filtro = (req, file, cb) => {
    if(file && (file.mimetype === 'image/jpg' || 
    file.mimetype === 'image/jpeg' ||
    file.mimetype === 'image/png' )) {
        cb(null,true);
}
else {
    cb(null,false);
}}    

const subirImagen = multer({ storage: guardar, fileFilter: filtro });

router.post('/producciones',  subirImagen.single('file'),  createItem,  (req, res) => {
        
        console.log('ingresa producciones post  '||subirImagen.filename);
});


router.get('/producciones', traerTodos,  (req, res) => {
        console.log('ingresa producción');
});

router.get('/producciones/:id', traerUno,  (req, res) => {
        console.log('consulta producción');
});

router.put('/producciones/:id', validateCreate, modificarUno,  (req, res) => {
        console.log('modifica producción');
});

router.delete('/producciones/:id', eliminarUno,  (req, res) => {
        console.log('elimina producción');
});

module.exports = router;