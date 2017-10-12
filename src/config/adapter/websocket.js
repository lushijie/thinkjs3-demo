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
      close: '/ws/close',
      open: '/ws/open',
      addUser: '/ws/addUser'
    }]
  }
}
