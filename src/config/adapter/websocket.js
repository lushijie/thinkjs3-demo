const socketio = require('think-websocket-socket.io');
const ws = require('think-websocket-ws');
const redis = require('socket.io-redis');

module.exports = {
  type: 'socketio',
  common: {
    // common config
  },
  socketio: {
    handle: socketio,
    allowOrigin: '127.0.0.1:8360',
    path: '/socket.io',
    // adapter: redis,
    messages: [
      {
        namespace: 'space1',
        // close: '/restful/api/getAction',
        open: '/restful/api/getAction',
        // addUser: '/websocket_socketio/addUser'
      },
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
