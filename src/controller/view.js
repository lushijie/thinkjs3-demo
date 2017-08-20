/*
* @Author: lushijie
* @Date:   2017-08-20 19:32:17
* @Last Modified by:   lushijie
* @Last Modified time: 2017-08-20 19:35:22
*/
module.exports = class extends think.Controller {
  constructor(...arg) {
    super(...arg);
  }

  indexAction() {
    this.assign('name', 'Hello World!');

    // 指定模板引擎渲染
    if(this.ctx.param().type == 'ejs') {
      return this.display('view_ejs', 'ejs');
    }

    return this.display('view_nunjucks');
  }
}
