/*
* @Author: lushijie
* @Date:   2017-07-21 10:14:37
* @Last Modified by:   lushijie
* @Last Modified time: 2017-08-20 18:49:53
*/
module.exports = class extends think.Controller {

  constructor(...arg) {
    super(...arg);
  }

  indexAction() {
    return this.success('user/test/index.js');
  }

}
