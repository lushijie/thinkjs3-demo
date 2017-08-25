const socketio = require('think-websocket-socket.io');

module.exports = {
  type: 'socketio',
  common: {
    // common config
  },
  socketio: {
    handle: socketio,
    allowOrigin: '127.0.0.1:8360',
    path: '/socket.io',
    adapter: null,
    messages: [{
      open: '/websocket/open',
      addUser: '/websocket/addUser'
    }]
  }
}
