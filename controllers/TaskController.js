const Task = require('../models/Task')

module.exports = class TaskController {
    static new(req, res) {
        res.render('tasks/new')
    }

    static insert(req, res) {
        res.render('/')
    }

    static index(req, res) {
        res.render('tasks/index')
    }
}