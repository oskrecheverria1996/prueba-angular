const { Router } = require('express');
const Users = require('./auth.controller');
module.exports = (router) => {
    router.post('/login', Users.login)
}