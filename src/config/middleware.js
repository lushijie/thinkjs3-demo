const path = require('path');
const isDev = think.env === 'development';
const csrf = require('think-csrf'); // 第三方middleware

module.exports = [
  {
    handle: 'meta',
    options: {
      logRequest: isDev,
      sendResponseTime: isDev
    }
  },
  {
      handle: csrf,
      options: {}
  },
  {
      handle: 'mdw1',
      options: {}
  },

  // 'mdw1',

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
      // defaultModule: 'home',
      // defaultController: 'index',
      // defaultAction: 'index',
      // prefix: [],
      // suffix: ['.html'],
      // enableDefaultRouter: true,
      // subdomainOffset: 2,
      // subdomain: {},
      // denyModules: []
    }
  },
  'logic',
  'controller'
];
