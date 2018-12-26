module.exports.setup = (app, router) => {
  require('./../api/test/routes').setup(router)
  app.use(router)
}
