const mongoose = require('mongoose');
const tasksSchema = require('../models/tasks.model');

tasksSchema.statics = {
    getTasks: function (query, cb) {
        this.find(query, cb);
    }
}

tasksSchema.statics = {
    createTask: function (body, cb) {
        const task = new this(body);
        task.save(cb);
    }
}

const tasksModel = mongoose.model('tasks', tasksSchema);
module.exports = tasksModel;