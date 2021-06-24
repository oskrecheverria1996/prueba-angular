const mongoose = require('mongoose');
const salasSchema = require('../models/salas.model');

salasSchema.statics = {
    getSalas: function (query, cb) {
        this.find(query, cb);
    }
}

const salasModel = mongoose.model('salas', salasSchema);
module.exports = salasModel;