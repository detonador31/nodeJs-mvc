const express = require('express')
const router = express.Router()

const TaskController = require('../controllers/TaskController')

router.get('/new', TaskController.new)
router.post('/save', TaskController.save)
router.get('/', TaskController.index)
router.get('/edit/:id', TaskController.edit)
router.get('/delete/:id', TaskController.delete)

module.exports = router