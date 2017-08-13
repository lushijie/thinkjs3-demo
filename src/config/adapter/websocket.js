const path = require('path');
const socketio = require('think-websocket-socket.io');

module.exports = {
  type: 'socketio',
  common: {
    // common config
  },
  socketio: {
    handle: socketio,
    allowOrigin: null,
    path: '/socket.io',
    adapter: null,
    messages: [{
      open: '/websocket/open',
    }]
  }
}
