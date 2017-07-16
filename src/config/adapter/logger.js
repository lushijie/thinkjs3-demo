/*
* @Author: lushijie
* @Date:   2017-07-16 18:36:25
* @Last Modified by:   lushijie
* @Last Modified time: 2017-07-16 18:36:29
*/
const path = require('path');
const thinkLogger = require('think-logger3');
const ConsoleLogger = thinkLogger.Console;
const FileLogger = thinkLogger.File;
const DateFileLogger = thinkLogger.DateFile;
const isDev = think.env === 'development';

/**
 * logger
 */
module.exports = {
  type: isDev ? 'console' : 'dateFile',
  console: {
    handle: ConsoleLogger
  },
  file: {
    handle: FileLogger,
    filename: path.join(think.ROOT_PATH, 'logs/cdn_agent.log'),
    maxLogSize: 50 * 1024,  //50M
    backups: 10 //max chunk number
  },
  dateFile: {
    handle: DateFileLogger,
    level: 'ALL',
    filename: path.join(think.ROOT_PATH, 'logs/cdn_agent.log'),
    pattern: '-yyyy-MM-dd',
    alwaysIncludePattern: true
  }
}
