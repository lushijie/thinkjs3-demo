/*
* @Author: lushijie
* @Date:   2017-07-16 18:00:04
* @Last Modified by:   lushijie
* @Last Modified time: 2017-09-10 16:41:50
*/
module.exports = [
  {
    interval: '10s',
    immediate: true,
    enable: false,
    handle: () => {
      //do something
      console.log('crontab...');
    }
  },
  {
    enable: false,
    cron: '*/1 * * * *',
    handle: '/index/crontab',
    worker: 'all'
  }
]
