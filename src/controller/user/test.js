/*
* @Author: lushijie
* @Date:   2017-08-20 18:46:20
* @Last Modified by:   lushijie
* @Last Modified time: 2017-08-20 18:49:50
*/

const Base = require('../base.js');
module.exports = class extends think.Controller {

  constructor(...arg) {
    super(...arg);
  }

  indexAction() {
    return this.success('user/test.js');
  }

}
