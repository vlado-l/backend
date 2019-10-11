class Todos {
  constructor (conn, responders) {
    global.conn = conn
    global.responders = responders
  }

  create (req, res) {
    const title = req.body.title
    const description = req.body.description

    const query = `
      INSERT INTO todos
      VALUES (null, '${title}', '${description}')
    `

    global.conn.query(query, global.responders.withJson(res))
  }

  readAll (req, res) {
    const search = req.query.search
    const query = `
      SELECT *
      FROM   todos
      WHERE  title       LIKE '%${search}%'
      OR     description LIKE '%${search}%'
    `

    global.conn.query(query, global.responders.withJson(res))
  }

  readOne (req, res) {
    const id = req.params.id

    const query = `
      SELECT *
      FROM   todos
      WHERE  id = ${id}
    `

    global.conn.query(query, global.responders.withJson(res))
  }

  update (req, res) {
    const id = req.params.id
    const title = req.body.title
    const description = req.body.description

    const query = `
      UPDATE todos
      SET    title       = '${title}',
             description = '${description}'
      WHERE  id = ${id}  
    `
  
    global.conn.query(query, global.responders.withJson(res))
  }

  delete (req, res) {
    const id = req.params.id

    const query = `
      DELETE FROM todos
      WHERE id = ${id}
    `

    global.conn.query(query, global.responders.withJson(res))
  }
}

module.exports = new Todos(
  require('../db/connection.js'),
  require('../responders/todos.js')
)
