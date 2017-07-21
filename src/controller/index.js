const Base = require('./base.js');

module.exports = class extends Base {

  constructor(...arg) {
    super(...arg);
  }

  __before() {
    console.log('前置操作');
  }

  __call() {
    console.log('魔术方法')
    this.success('ok');
  }

  indexAction() {
    return this.display();
  }

  csrfAction() {
    console.log(this.ctx.csrf);
    return this.success(this.ctx.csrf)
  }

  configAction() {
    return this.json(think.config());
  }

  extendAction() {
    return this.success(think.extend1());
  }

  validatorAction() {
    return this.display();
  }

  viewAction() {
    this.assign('name', 'Hello World!');

    // 指定模板引擎渲染
    if(this.ctx.param().type == 'ejs') {
      return this.display('index_view_ejs', 'ejs');
    }
    return this.display('index_view_nunjucks');
  }

  __after() {
    console.log('后置操作');
  }

}
