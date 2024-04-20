const mongoose = require('mongoose');

const produccionSchema = mongoose.Schema ({
    serial: {
        type: String,
        required: true
    },

    titulo: {
        type: String,
        required: true
    },

    sinopsis: {
        type: String,
        required: true
    },

    url: {
        type: String,
        required: false
    },  

    // imagen: {
    //     type: String,
    //     //type: Buffer, 
    //     required: false
    // },      
    

    fecha_creacion: {
        type: Date,
        required: false,
        default: Date.now()
    },

    fecha_actualizacion: {
        type: Date,
        required: false
    },    

    estreno: {
        type: Number,
        required: false
    },  

    genero: {
        type: String,
        required: false
    },

    director: {
        type: String,
        required: false
    },  

    productora: {
        type: String,
        required: false
    },      

    tipo: {
        type: String,
        required: false
    },

    path: { 
        type: String, 
        required: false,
        default: "/public/uploads"},

    filename: { 
        type: String, 
        required: false}

})

module.exports = mongoose.model('Produccion', produccionSchema);
