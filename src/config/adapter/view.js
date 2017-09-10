const nunjucks = require('think-view-nunjucks');
const ejs = require('think-view-ejs');
const path = require('path');

module.exports = {
  type: 'nunjucks',
  common: {
    viewPath: path.join(think.ROOT_PATH, 'view'),
    sep: '_',
    extname: '.html'
  },
  pug: {
    handle: 'pug'
  },
  nunjucks: {
    handle: nunjucks,
    options: { // nunjucks 的配置，例如重新定义定界符
      // tags: {
      //   blockStart: '<%',
      //   blockEnd: '%>',
      //   variableStart: '<$',
      //   variableEnd: '$>',
      //   commentStart: '<#',
      //   commentEnd: '#>'
      // }
    },
    beforeRender(env, nunjucks, handleOptions) { // 模板渲染之前执行，例如添加过滤器
      env.addFilter('myfilter', function(val, count) {
        return val.length > count ? `${val.slice(0,count)}...` : val;
      });
    }
  },
  ejs: {
    handle: ejs
  }
}


// module.exports = {
//   type: 'nunjucks',
//   viewPath: path.join(think.ROOT_PATH, 'view'),
//   sep: '_',
//   extname: '.html',
//   handle: nunjucks
// }
