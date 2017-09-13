const fileCache = require('think-cache-file');
const redisCache = require('think-cache-redis');
const path = require('path');

module.exports = {
  type: 'file',
  common: {
    timeout: 60 * 60 * 1000, // millisecond
  },
  file: {
    handle: fileCache,
    cachePath: path.join(think.ROOT_PATH, 'runtime/cache'),  // absoulte path is necessarily required
    pathDepth: 1,
    gcInterval: 24 * 60 * 60 * 1000 // gc interval
  },
  redis: {
    handle: redisCache,
    port: 6379,
    host: '127.0.0.1',
    password: ''
  }
}
