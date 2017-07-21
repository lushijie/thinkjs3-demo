/*
* @Author: lushijie
* @Date:   2017-07-21 10:14:37
* @Last Modified by:   lushijie
* @Last Modified time: 2017-07-21 10:18:41
*/
const Base = require('../base.js');

module.exports = class extends Base {

  constructor(...arg) {
    super(...arg);
  }

  indexAction() {
    return this.success('多级控制器');
  }

}
