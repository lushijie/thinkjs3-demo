/*
* @Author: lushijie
* @Date:   2017-08-20 18:57:42
* @Last Modified by:   lushijie
* @Last Modified time: 2017-09-10 14:24:13
*/
module.exports = class extends think.Controller {
  constructor(...arg) {
    super(...arg);
  }
  __before() {
    console.log('magic controller __before');
    return true;
  }

  __after() {
    console.log('magic controller __after')
    return this.success('after action response');
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
    // 当返回 false 会阻止执行 __after 魔术方法
    // 返回true 或者  无返回将执行 __after
    return true;
  }
}
