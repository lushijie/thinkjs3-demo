/*
* @Author: lushijie
* @Date:   2017-08-20 19:03:45
* @Last Modified by:   lushijie
* @Last Modified time: 2017-09-10 16:54:40
*/
module.exports = class extends think.Controller {
  constructor(...arg) {
    super(...arg);
  }

  indexAction() {
    let serviceInst = this.service('sms');
    return serviceInst.send();
  }
}
