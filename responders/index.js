class Responders {
  withJson (res, data) {
    return res.json(data)
  }
}

module.exports = new Responders()
