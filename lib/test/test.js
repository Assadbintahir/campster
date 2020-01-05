module.exports.indexTest = (name) => {
  return new Promise((resolve, reject) => {
    global.logger('lib/test: ', 'Endpoint is called')
    resolve({message: 'Hello ' + name})
  })
}
