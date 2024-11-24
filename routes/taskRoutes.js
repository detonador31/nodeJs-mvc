const express = require('express')
const router = express.Router()

const TaskController = require('../controllers/TaskController')

router.get('/new', TaskController.new)
router.get('/insert', TaskController.insert)
router.get('/', TaskController.index)

module.exports = router