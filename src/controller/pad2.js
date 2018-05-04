/*
* @Author: lushijie
* @Date:   2017-09-18 17:36:57
* @Last Modified by:   lushijie
* @Last Modified time: 2018-04-26 16:55:21
*/
module.exports = class extends think.Controller {
  constructor(...arg) {
    super(...arg);
  }

  async indexAction() {
    console.log('123123');
    // return this.success('this is pad.js');
  }

}

