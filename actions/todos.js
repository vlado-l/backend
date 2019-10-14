const express = require('express')
const router = express.Router()

const Todos = require('../domains/todos.js')
const Responders = require('../responders')

router.get('/', async function (_, res) {
  let rows = await Todos.readAll()
  Responders.withJson(res, rows)
})

router.get('/:id', async function (req, res) {
  let rows = await Todos.readOne(req)
  Responders.withJson(res, rows)
})

router.post('/', async function (req, res) {
  let row = await Todos.create(req)
  Responders.withJson(res, row)
})

router.put('/:id', async function (req, res) {
  let status = await Todos.update(req)
  Responders.withJson(res, status)
})

router.delete('/:id', async function (req, res) {
  let status = await Todos.delete(req)
  Responders.withJson(res, status)
})

module.exports = router
