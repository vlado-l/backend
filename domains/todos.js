const Op = require('../models').Sequelize.Op
const Todo = require('../models').Todo

class Todos {
  create (req) {
    return Todo.create(req.body)
  }

  readAll (req) {
    return Todo.findAll({
      where: {
        [Op.or]: [
          {
            title: {
              [Op.substring]: req.query.search
            }
          },
          {
            description: {
              [Op.substring]: req.query.search
            }
          }
        ]
      }
    })
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
