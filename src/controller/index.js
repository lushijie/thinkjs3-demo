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

  async indexAction() {
    // return this.fail({
    //   errno: 'errno',
    //   errmsg: 'errmsg',
    //   data: {
    //     a: 123
    //   }
    // });
    // return this.fail('ASD_DS')
    //
    //
    // await this.cache('a', 'test123123', {
    //   timeout: 60 * 1000
    // });
    // this.cache('a', null).then(res => {}, err => {
    //   console.log(err);
    // });

    // console.log('1:', await this.cache('a'));

    // for (let i = 0; i < 10000; i++) {
    //   await this.cache('a');
    // }

    // for (let i = 0; i < 10000; i++) {
    //   await this.cache('a', null);
    // }

    // console.log('2:', await this.cache('a'));


    // this.cache('a');
    // this.cache('a');
    // this.cache('a');
    // this.cache('a', null);
    // this.cache('a', null);
    // new think.app.controllers.pad2().indexAction()
    console.log(think.Controller.toString())
    return this.success('controller index');
  }
}
