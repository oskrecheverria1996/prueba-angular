const mongoose = require('mongoose');
const userSchema = require('./auth.model');

userSchema.statics = {
    login: function (query, cb) {
        this.find(query, cb);
    }
}

const authModel = mongoose.model('users', userSchema);
module.exports = authModel;