const mongoose = require('mongoose');

const directorSchema = mongoose.Schema ({
    nombre: {
        type: String,
        required: true
    },

    estado: {
        type: String,
        required: true
    },

    fecha_creacion: {
        type: Date,
        required: false,
        default: Date.now()
    },

    fecha_actualizacion: {
        type: Date,
        required: false
    } 



})

module.exports = mongoose.model('Director', directorSchema);
