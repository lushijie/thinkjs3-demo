const path = require('path');
const isDev = think.env === 'development';

module.exports = [
  {
    handle: 'meta',
    options: {
      logRequest: isDev,
      sendResponseTime: isDev
    }
  },
  {
    handle: 'resource',
    enable: isDev,
    options: {
      root: path.join(think.ROOT_PATH, 'www'),
      publicPath: /^\/(static|favicon\.ico)/
    }
  },
  {
    handle: 'trace',
    options: {
      debug: isDev
    }
  },
  {
    handle: 'payload',
    options: {
      uploadDir: path.join(think.ROOT_PATH, 'upload')
    }
  },
  {
    handle: 'router',
    options: {}
  },
  'logic',
  'controller'
];
