const mongoose = require('mongoose');
const tasksSchema = require('../models/tasks.model');

tasksSchema.statics = {
    getTasks: function (query, cb) {
        this.find(query, cb);
    }
}

tasksSchema.statics = {
    createTask: function (body, cb) {
        this.save(body, cb);
    }
}

const tasksModel = mongoose.model('tasks', tasksSchema);
module.exports = tasksModel;