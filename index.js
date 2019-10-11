const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const todosActions = require('./actions/todos.js')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/todos', todosActions)

app.listen(3000, () => {
  console.log("Server running on port 3000")
})
