module.exports = {
  port: 8360, // 端口号
  host: '127.0.0.1', // host
  workers: 1, // worker进程数，如果为0,worker会自动计算为cpu核心数; pm2 不能使用master方式启动
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
  stickyCluster: true,

  jwt: {
    secret: 'lushijie12121212',
    cookie: 'jwt-token',
    expire: 300 // 秒
  },

  cookie: {
    domain: '',
    path: '/',
    maxAge: 10 * 3600 * 1000, // 10个小时
    signed: true,
    keys: ['lushijie', 'lushijie1218'] // 当 signed 为 true 时，使用 keygrip 库加密时的密钥
  },

  email: {
    transport: {
      service: '126',
      auth: {
        user: "账号", // 账号
        pass: "授权密码" // 授权密码
      }
    },
    options: {
      from: 'lushijie1218@126.com', // 发送者地址
      to: '1036534499@qq.com', // 接受者,可以同时发送多个,以逗号隔开
      cc: 'lushijie5516@126.com', // 抄送
      bcc: '', // 密送
      subject: '邮件标题', // 标题
      //text: '普通文本', // 文本
      //text: {
      //  path: './package.json'
      //},
      html: '<b>这里是 HTML 内容 <img src="cid:00000001"/> </b>', // html 内容
      // html: {
      //   path: 'https://www.ctolib.com/nodemailer.html'
      // }, // html 内容2
      attachments:[
        {
          filename : '附件名称',
          path: './package.json'
        },{
          filename: '附件2',
          content: '123123'
        },{
          filename: '附件3',
          path: 'http://p5.qhimg.com/t012e4e6855de50213e.jpg',
          cid: '00000001'
        }
       ]
    }
  },
}
