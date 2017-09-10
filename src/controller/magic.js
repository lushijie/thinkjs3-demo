/*
* @Author: lushijie
* @Date:   2017-08-20 18:57:42
* @Last Modified by:   lushijie
* @Last Modified time: 2017-09-10 11:33:12
*/
module.exports = class extends think.Controller {
  constructor(...arg) {
    super(...arg);
  }
  __before() {
    console.log('__before');
    return true;
  }

  __after() {
    return this.success('after action');
  }

  __call() {
    return this.success('action not found!');
  }

  indexAction() {
    // this.controller('magic').index2Action();
    // this.action('magic', 'index2');
    // return 返回 body 将不再执行 __after 魔术方法
    return this.success('index');
  }

  index2Action() {
    console.log('index2Action');
    // 当返回 true 会执行 __after 魔术方法
    return true;
  }
}
