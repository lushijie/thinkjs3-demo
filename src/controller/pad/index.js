/*
* @Author: lushijie
* @Date:   2017-09-18 16:52:20
* @Last Modified by:   lushijie
* @Last Modified time: 2017-09-18 17:37:29
*/
module.exports = class extends think.Controller {
  constructor(...arg) {
    super(...arg);
  }

  async indexAction() {
    console.log(this.get('name'));
    return this.success('this id pad/index.js');
  }

}
