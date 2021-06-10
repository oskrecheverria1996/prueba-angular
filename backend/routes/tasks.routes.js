const { Router } = require('express');
const tasksController = require('../controllers/tasks.controller');
module.exports = (router) => {
    router.get('/getTasks', tasksController.getTasks);
    router.post('/createTask', tasksController.createTask);
}