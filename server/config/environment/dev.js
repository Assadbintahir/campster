
'use strict'

// Development specific configuration
// ==================================
module.exports = {
    // MongoDB connection options
    mongo: {
      uri: 'mongodb://localhost/campster-dev',
      options: { useNewUrlParser: true, useUnifiedTopology: true }
    },
    seedDB: false,
  }
