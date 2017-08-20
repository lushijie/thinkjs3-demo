/*
* @Author: lushijie
* @Date:   2017-08-20 20:16:28
* @Last Modified by:   lushijie
* @Last Modified time: 2017-08-20 20:16:52
*/
module.exports = class extends think.Controller {
  constructor(...arg) {
    super(...arg);
  }

  indexAction() {
    return this.success(this.myExtend());
  }
}
