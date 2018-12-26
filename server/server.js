'use strict'
const app = require('./express/app.js')

const logger = function (label, data) {
  const namespace = `campster:${label}`
  const debug = require('debug')(namespace)

  if (global.config.env === 'dev' || global.config.env === 'test') {
    debug(data)
    // Send logs to some logging server
  }
}

// app close func
const appOut = () => {
  global.logger('going to terminate the process')
  app.stop(() => {
    process.exit()
  })
  setTimeout(function () {
    process.exit()
  }, 10000)
}

// logger trace func
const exceptionHandler = (error) => {
  global.logger('Uncaught Exception: ', error.stack)
}

global.config = require('./config/environment')
global.project = 'campster'
global.logger = logger
app.start()
process.on('SIGTERM', appOut)
process.on('SIGINT', appOut)
process.on('uncaughtException', exceptionHandler)
