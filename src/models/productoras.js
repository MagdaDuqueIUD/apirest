const mongoose = require('mongoose');

const productoraSchema = mongoose.Schema ({
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
    },   

    slogan: {
        type: String,
        required: false
    },

    descripcion: {
        type: String,
        required: false
    }

})

module.exports = mongoose.model('Productora', productoraSchema);
