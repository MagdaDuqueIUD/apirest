const mongoose = require('mongoose');

const tipoSchema = mongoose.Schema ({
    nombre: {
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
    },   

    descripcion: {
        type: String,
        required: false
    }

})

module.exports = mongoose.model('Tipo', tipoSchema);
