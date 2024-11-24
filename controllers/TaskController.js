const Task = require('../models/Task')

module.exports = class TaskController {
    static new(req, res) {
        res.render('tasks/new')
    }
}