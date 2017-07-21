/*
* @Author: lushijie
* @Date:   2017-07-16 18:00:04
* @Last Modified by:   lushijie
* @Last Modified time: 2017-07-21 14:01:16
*/
module.exports = [
  // {
  //   interval: '10s',
  //   immediate: true,
  //   handle: () => {
  //     //do something
  //     console.log('crontab...');
  //   }
  // },
  {
    cron: '*/1 * * * *',
    handle: '/index/crontab',
    worker: 'all'
  }
]
