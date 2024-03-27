if (process.env.NODE_ENV === 'production') {
    module.exports = require('./util.common.prod.js')
  } else {
    module.exports = require('./util.common.dev.js')
  }
  