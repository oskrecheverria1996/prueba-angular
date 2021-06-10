const mongoose = require('mongoose');
const usersSchema = require('../models/auth.model');

usersSchema.statics = {
    getUsersList: function (query, cb) {
        this.find(query, cb);
    }
}

const userModel = mongoose.model('users', usersSchema);
module.exports = userModel;