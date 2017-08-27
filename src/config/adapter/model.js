const isDev = think.app.env === 'development';
const mysql = require('think-model-mysql');

const DB = {
  database: 'db_swf',
  prefix: 'think_',
  encoding: 'utf8',
  host: '127.0.0.1',
  port: '3306',
  user: 'root',
  password: 'root'
}

module.exports = {
  type: 'mysql',
  common: {
    logSql: isDev,
    logger: msg => console.log(msg)
  },
  mysql: {
    handle: mysql,
    ...DB
  },
  sequel: {
    prefix: 'think_',
    logConnect: false,
    database: 'think-demo',
    user: 'root',
    password: 'root',
    options: {
      host: '127.0.0.1',
      dialect: 'mysql',
      logging: false
    },
    schema: {
      timestamps: false
    }
  }
};

