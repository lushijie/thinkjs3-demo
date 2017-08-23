/*
* @Author: lushijie
* @Date:   2017-08-22 09:45:48
* @Last Modified by:   lushijie
* @Last Modified time: 2017-08-22 09:50:03
*/
module.exports = class extends think.Controller {
  constructor(...arg) {
    super(...arg);
  }

  __before() {
    console.log(this.ctx.param());
  }

  index1Action() {
    return this.success('index1');
  }

  index2Action() {
    return this.success('index2');
  }


  index3Action() {
    return this.success('index3');
  }
}
