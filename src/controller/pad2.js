/*
* @Author: lushijie
* @Date:   2017-09-18 17:36:57
* @Last Modified by:   lushijie
* @Last Modified time: 2017-09-18 17:43:52
*/
module.exports = class extends think.Controller {
  constructor(...arg) {
    super(...arg);
  }

  async indexAction() {
    console.log(this.get('name'));
    return this.success('this is pad.js');
  }

}

