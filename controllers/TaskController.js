const Task = require('../models/Task')

module.exports = class TaskController {
    static async new(req, res) {
        res.render('tasks/new')
    }

    static async insert(req, res) {
        const title = req.body.title
        const description = req.body.description
        const done = false
        const taskData = {
            title,
            description,
            done
        }

        await Task.create(taskData);

        res.redirect('/tasks')
    }

    static async index(req, res) {
        const tasks = await Task.findAll({ raw: true })

        res.render('tasks/index', { tasks })
    }
}