const User = require('./auth.logic');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const SECRET_KEY = 'secretkey123456'

exports.login = (req, res) => {
    const userData = {
        email: req.body.email,
        password: req.body.password
    }
    User.findOne({email: userData.email}, (err, user)=> {
        if(err) return res.status(500).send('Error');
        if(!user) {
            res.status(206).send({message: 'No se encontro el usuario'});
        } else {
            const resultPassword = userData.password;
            if(resultPassword == user.password) {
                const expiresIn = 24 * 60 * 60;
                const authToken = jwt.sign({user: user},
                    SECRET_KEY, {
                        expiresIn: expiresIn,
                    });
                const dataUser = {
                    email: user.email,
                    password: user.password,
                    role: user.role,
                }
                const requestSend = {
                    'dataUser': dataUser,
                    'accessToken': authToken
                }
                
                res.send(requestSend);
            } else {
                res.status(206).send({message: 'Contraseña incorrecta'});
            }
        }
    })
}
