const path = require('path');
const jwt = require('koa-jwt');
const isDev = think.env === 'development';

module.exports = [
  {
    handle: 'meta',
    options: {
      logRequest: isDev,
      sendResponseTime: isDev
    }
  },
  // {
  //   handle: 'graphql',
  //   options: {}
  // },
  // 'graphql',

  // function(ctx, next) {
  //   // console.log('自定义middleware2');
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
    // enable: false,
    options: {
      debug: isDev,
      error(err, ctx) {
        console.log(err, ctx);
      }
    }
  },
  {
    handle: jwt,
    match(ctx) {
      return !/^\/index\/login/.test(ctx.path);
    },
    options: {
      cookie: think.config('jwtCookie'),
      secret: think.config('jwtSecret')
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
      // prefix: ['/thinkjs'],
      // suffix: ['.html'],
      // subdomainOffset: 2,
      // subdomain: {
      //   'lib2,lushijie': 'yyyyy'
      // }
    }
  },
  'logic',
  {
    handle: 'controller',
    // options: {
    //   emptyController: 'empty'
    // }
  }

];
