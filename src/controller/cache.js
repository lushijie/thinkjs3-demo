/*
* @Author: lushijie
* @Date:   2017-09-13 09:19:40
* @Last Modified by:   lushijie
* @Last Modified time: 2018-04-01 11:17:41
*/

module.exports = class extends think.Controller {
  constructor(...arg) {
    super(...arg);
  }

  async indexAction() {
    // console.log('cache abc= ', await this.cache('abc'));
    await this.cache('abc', async() => {
      console.log('奔跑吧少年123...');
    });
    this.modelInstance = this.model('mysql/player');
    let res = await this.modelInstance.cache('a').select();
    let res1 = await this.modelInstance.cache('a').select();
    let res2 = await this.modelInstance.cache('b').select();
    return this.success('test index');
  }
}
