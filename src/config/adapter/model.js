const isDev = think.app.env === 'development';
const mysql = require('think-model-mysql');
const mongoose = require('think-mongoose');

const DB = {
  database: 'think-demo',
  prefix: 'think_',
  encoding: 'utf8',
  host: '127.0.0.1',
  port: '3306',
  user: 'root',
  password: 'root'
}

module.exports = {
  type: 'mongo',
  common: {
    logSql: isDev,
    logger: msg => console.log('mysql=>', msg)
  },
  mysql: {
    handle: mysql,
    ...DB
  },
  sequel: {
    prefix: 'think_',
    connectionString: 'mysql://root:root@127.0.0.1/think-demo',
    logConnect: false,
    // database: 'think-demo',
    // user: 'root',
    // password: 'root',
    options: {
      // host: '127.0.0.1',
      // dialect: 'mysql',
      logging: false,
      define: {
        timestamps: false
      }
    },
    schema: {
      //timestamps: false
    }
  },
  mongoose: {
    host: '127.0.0.1',
    port: 27000,
    user: 'lushijie',
    prefix: 'think_',
    password: 'lushijiepwd',
    database: 'think-demo',
    useCollectionPlural: false,
    options: {
      // strict: false
    }
  },
  mongo: {
    host: '127.0.0.1',
    port: 27000,
    user: 'lushijie',
    prefix: 'think_',
    password: 'lushijiepwd',
    database: 'think-demo',
    options: {

    }
  }
};

