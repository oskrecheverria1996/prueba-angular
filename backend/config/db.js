const mongoose = require('mongoose');
const dbURL = require('./properties').DB;

module.exports = ()=> {
    mongoose.connect(dbURL, {useNewUrlParser: true})
    .then(()=> console.log(`db connected on ${dbURL}`))
    .catch(err => console.log(`Error ${err}`))

    process.on('SIGINT', () => {
        mongoose.connection.close (() => {
            console.log(`DB disconect`)
            process.exit(0)
        })
    })
}