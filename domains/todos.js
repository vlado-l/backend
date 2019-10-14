const Todo = require('../models').Todo

class Todos {
  create (req) {
    return Todo.create(req.body)
  }

  readAll () {
    return Todo.findAll()
  }

  readOne (req) {
    return Todo.findByPk(req.params.id)
  }

  update (req) {
    return Todo.update(req.body, {
      where: {
        id: req.params.id
      }
    })
  }

  delete (req) {
    return Todo.destroy({
      where: {
        id: req.params.id
      }
    })
  }
}

module.exports = new Todos()
