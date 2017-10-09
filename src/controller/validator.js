/*
* @Author: lushijie
* @Date:   2017-08-20 18:50:42
* @Last Modified by:   lushijie
* @Last Modified time: 2017-10-09 11:04:31
*/
module.exports = class extends think.Controller {
  constructor(...arg) {
    super(...arg);
  }

  indexAction() {
    return this.success('index验证通过，进入Controller');
  }

  index2Action() {
    return this.success('index2验证通过，进入Controller');
  }

  index3Action() {
    console.log('num=', this.get('arr'));
    return this.success('index3验证通过，进入Controller');
  }
}
