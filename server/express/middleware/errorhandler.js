const TAG = 'server/express/middleware/errorhandler.js'

module.exports = function () {
  return (err, req, res, next) => {
    global.logger(TAG, `Error Logged: ${req.url}  ${req.method} -- ${err.stack}`)

    res.status(500).json({status: 'failed', payload: err.stack})
  }
}
