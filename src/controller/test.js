/*
* @Author: lushijie
* @Date:   2017-09-13 09:19:40
* @Last Modified by:   lushijie
* @Last Modified time: 2017-09-13 11:58:43
*/

module.exports = class extends think.Controller {
  constructor(...arg) {
    super(...arg);
  }

  async indexAction() {
    console.log(await this.cache('lushijie12313'));
    await this.cache('lushijie123', async() => {
      console.log('奔跑吧少年');
    });
    return this.success('test index');
  }
}
