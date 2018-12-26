module.exports.helloWorld = (req, res, next) => {
  res.status(200).json({message: 'Hello World'})
  // next(new Error('This is user generated error'))
}
