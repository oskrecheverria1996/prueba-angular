const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const peliculasSchema = new Schema({
    _id: {
        type: String,
    },
    codigo: {
        type: String,
        required: true,
    },
    nombre: {
        type: String,
        required: true,
    },
    descripcion: {
        type: String,
        required: true,
    },
    imagen: {
        type: String,
        required: true,
    },
    horarios: {
        type: Array,
    },
    sala: {
        type: Schema.Types.ObjectId, 
        ref: "salas"
    }
});

module.exports = peliculasSchema;