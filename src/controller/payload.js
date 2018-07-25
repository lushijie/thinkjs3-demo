/*
* @Author: lushijie
* @Date:   2017-08-30 18:43:02
* @Last Modified by:   lushijie
* @Last Modified time: 2018-07-04 10:41:19
*/
const fs = require('fs');
const path = require('path');
const helper = require('think-helper');

module.exports = class extends think.Controller {
  constructor(...arg) {
    super(...arg);
  }

  indexAction() {
    let file = this.ctx.file().file;
    let uuidName = helper.md5(`${helper.uuid()}_${file.name}`) + path.extname(file.name);

    // 保存文件
    fs.renameSync(file.path, path.join(think.ROOT_PATH, '/upload', uuidName));
    return this.success('payload');
  }
}
