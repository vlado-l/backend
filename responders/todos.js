class Responders {
  withJson (res) {
    return (err, rows, fields) => {
      if (err) return res.json(err)
      else return res.json(rows)
    }
  }
}

module.exports = new Responders()
