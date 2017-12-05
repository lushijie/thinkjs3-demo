//invoked in worker
think.app.on("appReady", async () => {
  // console.log(await think.model('mysql/player').getAllPlayers())；
  // console.log(think.app.models);
});

global.getASCIISum = function(str) {
  if(str && think.isString(str)) {
    return str.split('').reduce((acc, val) => {
      return acc + val.charCodeAt(0);
    }, 0);
  }
}


global.commonFn = function() {
  console.log('This is commonFn');
}

think.beforeStartServer(async () => {
  // 诸如动态自定义路由，从数据库读取配置等
  // console.log('This is beforeStartServer');
})

// 该回调函数只会在一个进程下执行
think.messenger.on('sendSMS', (data) => {
  // console.log('sendSMS..', data);
  think.beforeStartServer(async () => {
    // console.log(think.app.controllers);
    // console.log('This is beforeStartServer222');
  })
});

// //调用事件，只会在一个进程下执行一次
think.messenger.consume('sendSMS', {data: 'Hello World'});
