const { Router } = require('express');
const salasController = require('../controllers/salas.controller');
module.exports = (router) => {
    router.get('/getSalas', salasController.getSalas)
}