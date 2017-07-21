const Base = require('./base.js');

module.exports = class extends Base {

  constructor(...arg) {
    super(...arg);
  }

  indexAction() {
    return this.display();
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

}
