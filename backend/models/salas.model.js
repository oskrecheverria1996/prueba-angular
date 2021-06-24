const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const salasSchema = new Schema({
    _id: {
        type: String
    },
    codigo: {
        type: String,
        required: true,
    },
    nombre: {
        type: String,
        required: true,
    },
    horarios: {
        type: Array,
    },
});

module.exports = salasSchema;