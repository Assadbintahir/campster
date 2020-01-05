// Production specific configuration
// ==================================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: process.env.MONGO_URI || 'mongodb://localhost/campster-prod',
    options: { useNewUrlParser: true, useUnifiedTopology: true }
  },
  seedDB: false,
}
