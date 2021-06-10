// Imports
const { Router } = require('express');
const auth = require('../controllers/auth.controller');

// Routes
module.exports = (router) => {
    router.post('/login', auth.login);
}