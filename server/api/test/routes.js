module.exports.setup = (router) => {
  router.get('/api/v1/test', require('./controller').helloWorld)
}
