/*
* @Author: lushijie
* @Date:   2017-07-21 10:14:37
* @Last Modified by:   lushijie
* @Last Modified time: 2017-07-23 17:29:08
*/
const Base = require('./base.js');

module.exports = class extends Base {

  constructor(...arg) {
    super(...arg);
  }

  indexAction() {
    return this.success('单级控制');
  }

}
