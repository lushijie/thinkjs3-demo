/*
* @Author: lushijie
* @Date:   2017-08-20 19:32:17
* @Last Modified by:   lushijie
* @Last Modified time: 2017-09-10 14:11:46
*/
const ejs = require('think-view-ejs');
const nunjucks = require('think-view-nunjucks');
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

  index2Action() {
    this.display('view_pug', 'pug')
  }

  async testAction() {
    this.assign('name', 'lushijie');
    let result1 = await this.render('view_ejs', 'ejs');
    let result2 = await this.render('view_ejs', {type: 'ejs'});
    let result3 = await this.render('view_nunjucks2', {
      options: {
        tags: {
          blockStart: '<%',
          blockEnd: '%>',
          variableStart: '{%',
          variableEnd: '%}',
          commentStart: '<#',
          commentEnd: '#>'
        }
      }
    });
    let result4 = await this.render('view_ejs', {
      type: 'ejs',
      handle: ejs,
      options: {}
    });
    return this.success(result1 + result2 + result3 + result4)
  }
}
