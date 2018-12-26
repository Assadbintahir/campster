const TAG = 'server/express/middleware/errorhandler.js'

module.exports = function () {
  return (err, req, res, next) => {
    console.log(`Logged  ${req.url}  ${req.method} -- ${err.stack}`)
    global.logger(TAG, `Error Logged: ${req.url}  ${req.method} -- ${err.stack}`)

    res.status(500).json({status: 'failed', payload: err.stack})
  }
}
