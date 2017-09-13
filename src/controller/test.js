/*
* @Author: lushijie
* @Date:   2017-09-13 09:19:40
* @Last Modified by:   lushijie
* @Last Modified time: 2017-09-13 09:40:15
*/

module.exports = class extends think.Controller {
  constructor(...arg) {
    super(...arg);
  }

  async indexAction() {
    await this.cache('lushijie', 'val5', {
      type: 'redis',
      redis: {
        timeout: 10000
      }
    })
    return this.success('test index');
  }
}
