/*
* @Author: lushijie
* @Date:   2017-09-13 09:19:40
* @Last Modified by:   lushijie
* @Last Modified time: 2018-03-19 14:46:36
*/

module.exports = class extends think.Controller {
  constructor(...arg) {
    super(...arg);
  }

  async indexAction() {
    // console.log(await this.cache('lushijie12313'));
    await this.cache('lushijie123', async() => {
      console.log('奔跑吧少年134232');
    });
    this.modelInstance = this.model('mysql/player');
    let res = await this.modelInstance.cache('a').select();
    let res1 = await this.modelInstance.cache('a').select();
    let res2 = await this.modelInstance.cache('b').select();
    console.log(123123);
    return this.success('test index');
  }
}
