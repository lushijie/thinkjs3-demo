const nunjucks = require('think-view-nunjucks');
const pug = require('think-view-pug');
const path = require('path');

module.exports = {
  type: 'nunjucks',
  common: {
    viewPath: path.join(think.ROOT_PATH, 'view'),
    sep: '_',
    extname: '.html'
  },
  nunjucks: {
    handle: nunjucks
  }
}
