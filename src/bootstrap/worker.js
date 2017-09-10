//invoked in worker
think.app.on("appReady", () => {
  //console.log('ready...');
});



global.commonFn = function() {
  console.log('This is commonFn');
}

think.beforeStartServer(async () => {
  // 诸如动态自定义路由，从数据库读取配置等
  // console.log('This is beforeStartServer');
})

// 该回调函数只会在一个进程下执行
think.messenger.on('sendSMS', (data) => {
  console.log('sendSMS..', data);
  think.beforeStartServer(async () => {
    console.log(think.app.controllers);
    console.log('This is beforeStartServer222');
  })
});

// //调用事件，只会在一个进程下执行一次
think.messenger.consume('sendSMS', {data: 'Hello World'});
