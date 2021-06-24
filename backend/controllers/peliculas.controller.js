const peliculasLogic = require('../logic/peliculas.logic');
const jwt = require('jsonwebtoken');

exports.getPeliculas = (req, res) => {
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
            peliculasLogic.find({}, (err, peliculas)=> {
            res.send(peliculas)
          })
        }
    })
}

exports.crearPelicula = (req, res) => {
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
            peliculasLogic.findOne({name: task.name}, (err, task_exist)=> {
                console.log(task_exist);
                if(task_exist) {
                    res.status(409).send({message: 'La pelicula ya existe'});
                } else {
                    peliculasLogic.createPelicula(task, (err, task_res) => {
                        res.status(201).send(task_res);
                    })
                }
            })
          }
    })
}

exports.asignarSalaPelicula = (req, res) => {
    var token = req.headers['authorization'];
    console.log(req.body);
    if(!token){
        res.status(401).send({
            error: "Falta autorizacion"
        })
    }
    jwt.verify(token, 'secretkey123456', function(err, user) {
        if (err) {
          res.status(401).send({error: 'Token inválido'})
        } else {  
            const pelicula = req.body;
            const id = pelicula._id;
            peliculasLogic.findByIdAndUpdate(id, pelicula, (err, pelicula) => {
                res.status(204).send({message: 'Se ha asignado una sala a la pelicula'});
            })
          }
    })
}
