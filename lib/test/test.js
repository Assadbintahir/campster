module.exports.indexTest = (name) => {
  return new Promise((resolve, reject) => {
    resolve({message: 'Hello ' + name})
  })
}
