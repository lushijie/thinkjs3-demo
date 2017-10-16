const socketio = require('think-websocket-socket.io');
const ws = require('think-websocket-ws');

module.exports = {
  type: 'ws',
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
        close: '/websocket_socketio/close',
        open: '/websocket_socketio/open',
        addUser: '/websocket_socketio/addUser'
      },
      // {
      //   namespace: 'space2',
      //   close: '/websocket_socketio/close2',
      //   open: '/websocket_socketio/open2',
      //   addUser: '/websocket_socketio/addUser'
      // }
    ]
  },
  ws: {
    handle: ws,
    path: '/ws',
    onConnection: function(sc, req) {
      console.log('ws 连接成功')
    },
    // port: 8360,
    verifyClient: function(info) {
      return true;
    },
    messages: [{
      close: '/websocket_ws/close',
      open: '/websocket_ws/open',
      addUser: '/websocket_ws/addUser'
    }]
  }
}
