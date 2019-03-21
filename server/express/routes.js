module.exports.setup = (app, router) => {
  router.get('/', (req, res, next) => {
    res.status(200).json({name: 'asad'})
  })
  require('./../api/test/routes').setup(router)
  app.use(router)
}
