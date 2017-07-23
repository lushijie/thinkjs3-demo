const path = require('path');
const cookieSession = require('think-session-cookie');
const fileSession = require('think-session-file');

module.exports = {
  type: 'cookie',
  common: {
    cookie: {
      name: 'site',
      keys: ['werwer', 'werwer'],  // 需要与config的cookie相同？不需要
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
  }
}
