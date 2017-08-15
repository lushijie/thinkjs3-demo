/*
* @Author: lushijie
* @Date:   2017-08-13 18:51:35
* @Last Modified by:   lushijie
* @Last Modified time: 2017-08-15 13:09:01
*/
const Base = require('./base.js');

module.exports = class extends Base {

  constructor(...arg) {
    super(...arg);
  }

  indexAction() {
    return this.display();
  }

  openAction() {
    console.log('ws open');
    this.emit('test', 'aaa')
    // return this.success();
  }
}
