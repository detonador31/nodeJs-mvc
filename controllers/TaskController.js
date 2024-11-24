const Task = require('../models/Task')

module.exports = class TaskController {
    static async new(req, res) {
        res.render('tasks/new')
    }

    static async edit(req, res) {
        const id = req.params.id
        const task = await Task.findOne({ raw: true, where: { id: id } })

        res.render('tasks/new', { task })
    }

    static async index(req, res) {
        const tasks = await Task.findAll({ raw: true })

        res.render('tasks/index', { tasks })
    }

    static async delete(req, res) {
        const id = req.params.id
        await Task.destroy({ where: { id: id } })

        res.redirect('/tasks')
    }

    static async save(req, res) {
        const id = req.body.id
        const title = req.body.title
        const description = req.body.description
        let done = false
        if (req.body.done) {
            done = true
        }
        const taskData = {
            title,
            description,
            done
        }
        if (id) {
            await Task.update(taskData, { where: { id: id } });
        } else {
            await Task.create(taskData);
        }

        res.redirect('/tasks')
    }
}