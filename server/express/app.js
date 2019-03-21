const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const compression = require('compression')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const cookieParser = require('cookie-parser')
const helmet = require('helmet')
const passport = require('passport')
const http = require('http')
const path = require('path')
const routes = require('./routes')
const errorHandler = require('./middleware/errorhandler')
const db = {}

let server

const TAG = '/server/express/app.js'

module.exports.start = () => {
  const app = express()
  mongoose.connect(global.config.mongo.uri, global.config.mongo.options)
  global.db = db

  app.use(compression())
  app.use(helmet())
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(express.static(path.join(__dirname, '../../client/build')));
  app.use(bodyParser.json())
  app.use(methodOverride())
  app.use(cookieParser())
  app.use(passport.initialize())
  routes.setup(app, express.Router())
  app.use(errorHandler())

  if (global.config.env === 'dev' || global.config.env === 'test') {
    app.use(morgan('dev'))
  }

  server = http.createServer(app)
  // const socket = require('socket.io').listen(server)
  server.listen(global.config.port, () => {
    global.logger(TAG, `Campster server started on ${global.config.port} in ${global.config.env} mode.`)
  })
  // require('./socketio').setup(socket)

  if (global.config.env === 'prod') {
    console.log(`Campster server started on ${global.config.port} in ${global.config.env} mode.`)
  }
}

module.exports.stop = (callback) => {
  server.close(() => {
    callback()
  })
}
