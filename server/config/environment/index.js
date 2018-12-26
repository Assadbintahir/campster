const path = require('path')
const _merge = require('lodash/merge')

const all = {
  env: process.env.NODE_ENV || 'dev',
  secrets: {
    session: process.env.SESSION_SECRET || 'some string'
  },
  // Project root path
  root: path.normalize(`${__dirname}/../../..`),
  // Server port
  port: process.env.PORT || 3000,
  ip: process.env.IP || undefined,
  domain: `${process.env.DOMAIN || 'https://campster.kibopush.com'}`,
  // Mongo Options
  mongo: {
    options: {
      db: {
        safe: true
      }
    }
  }
}
module.exports = _merge(
  all,
  require(`./${process.env.NODE_ENV}.js`) || {})
