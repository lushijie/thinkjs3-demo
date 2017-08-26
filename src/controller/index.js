const Base = require('./base.js');

module.exports = class extends Base {
  constructor(...arg) {
    super(...arg);
  }

  __before(){
    // 通过 Promise.resolve 将返回值包装为 Promise
    // 如果返回值确定为 Promise，那么就不需要再包装了
    return Promise.resolve(super.__before()).then(flag => {
      // 如果父级想阻止后续继承执行会返回 false，这里判断为 false 的话不再继续执行了。
      if(flag === false) return false;

      // 其他逻辑代码
    })
  }

  indexAction() {
    return this.success('controller index');
  }
}
