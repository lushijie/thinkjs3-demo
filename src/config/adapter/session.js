const path = require('path');
const cookieSession = require('think-session-cookie');
const fileSession = require('think-session-file');
const redisSession = require('think-session-redis');

module.exports = {
  type: 'redis',
  common: {
    cookie: {
      name: 'thinkjs',
      keys: ['lushijie1218', 'lushijie'],  // 需要与config的cookie相同？不需要
      signed: true
    }
  },
  cookie: {
    handle: cookieSession,
    cookie: {
      maxAge: 24 * 3600 * 1000,
      keys: ['welefen', 'suredy'], // ?
      encrypt: true
    }
  },
  file: {
    handle: fileSession,
    sessionPath: path.join(think.ROOT_PATH, 'runtime/session')
  },
  redis: {
    handle: redisSession,
    port: 6379,
    maxAge: 60 * 1000,
    autoUpdate: true,
    // host: '127.0.0.1',
    // password: ''
    host: '116.255.177.161',
    password: 'ivagnerpass'
  }
}
