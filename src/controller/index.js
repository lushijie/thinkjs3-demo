const Base = require('./base.js');

module.exports = class extends Base {

  constructor(...arg) {
    super(...arg);
  }

  __call() {
    console.log('魔术方法')
    this.success('ok');
  }

  __before() {
    console.log('前置操作 ');
  }

  __after() {
    console.log('后置操作');
  }

  indexAction() {
    let serviceTest = this.service('test');
    console.log(serviceTest.output());
    return this.display();
  }

  emailAction() {
    this.sendEmail(think.config('email').transport, think.config('email').options).then(info => {
      console.log(info);
    }, err => {
      console.log(err);
    });
    return this.success();
  }

  cookieAction() {
    this.cookie('name', 'lushijie');
    this.cookie('theme', 'yellow', { // 设定 cookie 时指定额外的配置
      maxAge: 10000,
      //path: '/theme'
    });
    return this.success();
  }

  sessionAction() {
    this.session('name', 'lushijie');
    return this.display();
  }

  csrfAction() {
    console.log(this.ctx.csrf);
    return this.success(this.ctx.csrf)
  }

  configAction() {
    return this.json(think.config());
  }

  crontabAction() {
    console.log('crontabAction...');
    return this.success();
  }

  extendAction() {
    return this.success(think.extend1());
  }

  validatorAction() {
    return this.success();
  }

  viewAction() {
    this.assign('name', 'Hello World!');

    // 指定模板引擎渲染
    if(this.ctx.param().type == 'ejs') {
      return this.display('index_view_ejs', 'ejs');
    }
    return this.display('index_view_nunjucks');
  }

}
