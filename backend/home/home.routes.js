const { Router } = require('express');
const homeController = require('./home.controller');
module.exports = (router) => {
    router.get('/getUsersList', homeController.getUsersList)
}