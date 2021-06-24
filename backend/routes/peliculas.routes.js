const { Router } = require('express');
const peliculasController = require('../controllers/peliculas.controller');
module.exports = (router) => {
    router.get('/getPeliculas', peliculasController.getPeliculas)
    router.post('/crearPelicula', peliculasController.crearPelicula)
    router.put('/asignarSalaPelicula', peliculasController.asignarSalaPelicula)
}