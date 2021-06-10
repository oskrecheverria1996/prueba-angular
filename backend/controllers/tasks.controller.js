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
            taskLogic.find({}, (err, tasks)=> {
            res.send(tasks)
          })
        }
    })
}

exports.createTask = (req, res) => {
    console.log(req.body);
    const task = new taskLogic(req.body);
    res.send(task)
}