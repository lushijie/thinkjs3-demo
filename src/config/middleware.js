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
      handle: 'mymiddleware',
      options: {}
  },

  // 'mymiddleware',

  // function(ctx, next) {
  //   console.log('自定义middleware2');
  //   return next();
  // },

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
    options: {
      suffix: ['.html'],
    }
  },
  'logic',
  {
    handle: 'controller',
    options: {
      emptyController: 'empty'
    }
  }

];
