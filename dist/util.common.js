if (process.env.NODE_ENV === 'production') {
    module.exports = require('@minsk/util/dist/util.common.prod.js')
  } else {
    module.exports = require('@minsk/util/dist/util.common.dev.js')
  }
  