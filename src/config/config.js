module.exports = {
  port: 5050, // 端口号
  host: '127.0.0.1', // host
  workers: 0, // worker进程数，如果为0,worker会自动计算为cpu核心数; pm2 不能使用master方式启动
  createServer: null, // 自定以创建server，默认 think.app.listen 方式
  startServerTimeout: 3000, // 启动server超时时间
  reloadSignal: 'SIGUSR2', // reload process signal
  onUnhandledRejection: err => think.logger.error(err), // 一个Promise被rejected，并且此Promise没有绑定错误处理器，'unhandledRejection事件会被触发
  onUncaughtException: err => think.logger.error(err), // 未捕获的异常处理句柄
  processKillTimeout: 10 * 1000, // 杀死进程超时，默认10秒
  enableAgent: false, // enable agent worker
  jsonpCallbackField: 'callback', // jsonp callback 字段名称
  jsonContentType: 'application/json', // json content type
  errnoField: 'errno', // errno 字段
  errmsgField: 'errmsg', // errmsg 字段
  defaultErrno: 1000, // 默认错误号
  validateDefaultErrno: 1001, // 默认验证失败错误号

  cookie: {
    domain: '',
    path: '/',
    maxAge: 10 * 3600 * 1000, // 10个小时
    signed: true,
    keys: ['lushijie', 'lushijie1218'] // 当 signed 为 true 时，使用 keygrip 库加密时的密钥
  },

  // 可以在这里定义自定义配置
  devHost: '192.0.0.2'
}
