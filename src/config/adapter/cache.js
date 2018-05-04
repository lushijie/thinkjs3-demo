const helper = require('think-helper');
const fileCache = require('think-cache-file');
const redisCache = require('think-cache-redis');
const memcacheCache = require('think-cache-memcache');
const path = require('path');

module.exports = {
  type: 'file',
  common: {
    timeout: 30 * 1000,
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
    password: '',
    reuse: function(config) {
      return helper.md5(config.port + config.host);
    }
  },
  memcache: {
    handle: memcacheCache,
    hosts: ['127.0.0.1:11211'],
    maxValueSize: 1048576,
    netTimeout: 5000,
    reconnect: true
  }
}
