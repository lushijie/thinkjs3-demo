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
    messages: [
      {
        // namespace: 'space1',
        close: '/websocket/close1',
        open: '/websocket/open1',
        addUser: '/websocket/addUser'
      },
      // {
      //   namespace: 'space2',
      //   close: '/websocket/close2',
      //   open: '/websocket/open2',
      //   addUser: '/websocket/addUser'
      // }
    ]
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
