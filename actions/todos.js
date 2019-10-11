const express = require('express')
const router = express.Router()

const Todos = require('../domains/todos.js')

router.get('/', Todos.readAll)
router.get('/:id', Todos.readOne)
router.post('/', Todos.create)
router.put('/:id', Todos.update)
router.delete('/:id', Todos.delete)

module.exports = router
