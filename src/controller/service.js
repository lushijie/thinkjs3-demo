/*
* @Author: lushijie
* @Date:   2017-08-20 19:03:45
* @Last Modified by:   lushijie
* @Last Modified time: 2017-08-20 19:06:06
*/
module.exports = class extends think.Controller {
  constructor(...arg) {
    super(...arg);
  }

  indexAction() {
    let serviceInst = this.service('service1');
    return this.success(serviceInst.text())
  }
}
