/*
* @Author: lushijie
* @Date:   2017-09-08 10:06:26
* @Last Modified by:   lushijie
* @Last Modified time: 2017-09-08 10:13:02
*/

module.exports = class extends think.Controller {
  constructor(...arg) {
    super(...arg);
  }

  getInfoByNameAction() {
    return this.success('getUserInfoAction:' + this.ctx.param().name);
  }
}
