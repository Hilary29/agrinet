module.exports = {
    async rewrites() {
      return [
        {
          source: '/ws',
          destination: 'http://192.168.1.133:4014/ws' // Proxy to Backend
        }
      ]
    }
  }