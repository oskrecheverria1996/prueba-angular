const mongoose = require('mongoose');
const peliculasSchema = require('../models/peliculas.model');

peliculasSchema.statics = {
    getPeliculas: function (query, cb) {
        this.find(query, cb);
    }
}

peliculasSchema.statics = {
    crearPelicula: function (body, cb) {
        const pelicula = new this(body);
        pelicula.save(cb);
    }
}

peliculasSchema.statics = {
    asignarSalaPelicula: function (body, cb) {
        const pelicula = new this(body);
        pelicula.save(cb);
    }
}

const peliculasModel = mongoose.model('peliculas', peliculasSchema);
module.exports = peliculasModel;