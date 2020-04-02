const withPWA = require('next-pwa')

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable : !process.env.PRODUCTION,
    include : ['shop_all.json']
  }
})
