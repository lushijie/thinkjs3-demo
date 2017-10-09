const socketio = require('think-websocket-socket.io');

module.exports = {
  type: 'ws',
  common: {
    // common config
  },
  sockjs: {
    handle: 'sockjs',
    allowOrigin: '127.0.0.1:8360',
    path: '/socket.io',
    adapter: null,
    messages: [{
      close: '/websocket/close',
      open: '/websocket/open',
      addUser: '/websocket/addUser'
    }]
  },
  socketio: {
    handle: socketio,
    allowOrigin: '127.0.0.1:8360',
    path: '/socket.io',
    adapter: null,
    messages: [{
      close: '/websocket/close',
      open: '/websocket/open',
      addUser: '/websocket/addUser'
    }]
  },
  ws: {
    handle: socketio,
    allowOrigin: '127.0.0.1:8360',
    path: '/socket.io',
    adapter: null,
    messages: [{
      close: '/websocket/close',
      open: '/websocket/open',
      addUser: '/websocket/addUser'
    }]
  }
}
