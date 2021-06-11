const taskLogic = require('../logic/tasks.logic');
const jwt = require('jsonwebtoken');

exports.getTasks = (req, res) => {
    console.log('req', req.headers['authorization'])
    var token = req.headers['authorization'];
    if(!token){
        res.status(401).send({
            error: "Falta autorizacion"
        })
    }
    jwt.verify(token, 'secretkey123456', function(err, user) {
        if (err) {
          res.status(401).send({error: 'Token inválido'})
        } else {  
            taskLogic.findOne({}, (err, tasks)=> {
            res.send(tasks)
          })
        }
    })
}

exports.createTask = (req, res) => {
    var token = req.headers['authorization'];
    if(!token){
        res.status(401).send({
            error: "Falta autorizacion"
        })
    }
    jwt.verify(token, 'secretkey123456', function(err, user) {
        if (err) {
          res.status(401).send({error: 'Token inválido'})
        } else {  
            const task = req.body;
            taskLogic.findOne({name: task.name}, (err, task_exist)=> {
                console.log(task_exist);
                if(task_exist) {
                    res.status(409).send({message: 'El nombre de tarea ya existe'});
                } else {
                    taskLogic.createTask(task, (err, task_res) => {
                        res.status(201).send(task_res);
                    })
                }
            })
          }
    })
}