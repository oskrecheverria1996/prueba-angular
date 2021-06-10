const { Router } = require('express');
const homeController = require('../controllers/home.controller');
module.exports = (router) => {
    router.get('/getUsersList', homeController.getUsersList)
}