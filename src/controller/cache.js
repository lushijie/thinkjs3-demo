/*
* @Author: lushijie
* @Date:   2017-09-13 09:19:40
* @Last Modified by:   lushijie
* @Last Modified time: 2017-12-18 15:52:57
*/

module.exports = class extends think.Controller {
  constructor(...arg) {
    super(...arg);
  }

  async indexAction() {
    console.log(await this.cache('lushijie12313'));
    await this.cache('lushijie123', async() => {
      console.log('奔跑吧少年134232');
    });
    return this.success('test index');
  }
}
