const homeLogic = require('./home.logic');
const jwt = require('jsonwebtoken');

exports.getUsersList = (req, res) => {
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
          homeLogic.find({}, (err, users)=> {
            res.send(users)
          })
        }
    })
}