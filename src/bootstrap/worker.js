//invoked in worker
global.commonFn = function() {
  console.log('This is commonFn');
}

think.beforeStartServer(async () => {
  // console.log('This is beforeStartServer');
  // 这里可以动态自定义路由哦
})

think.app.on("appReady", () => {
  //console.log('ready...');
})
