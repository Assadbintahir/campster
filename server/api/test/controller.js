const lib = require('./../../../lib/index')

module.exports.helloWorld = (req, res, next) => {
  lib.test.indexTest('Asad')
    .then(result => {
      res.status(200).json(result)
    })
    .catch((err) => {
      next(err)
    })
}
