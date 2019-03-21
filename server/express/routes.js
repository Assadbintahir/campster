module.exports.setup = (app, router) => {
  require('./../api/test/routes').setup(router)
  router.get('*', (req, res, next) => {
    res.sendFile(require('path').join(__dirname, '../../client/build', 'index.html'));
  })
  app.use(router)
}
