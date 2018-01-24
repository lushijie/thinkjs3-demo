/*
* @Author: lushijie
* @Date:   2018-01-08 14:34:46
* @Last Modified by:   lushijie
* @Last Modified time: 2018-01-18 10:14:15
*/
const path = require('path');

module.exports = class extends think.Controller {
  constructor(...arg) {
    super(...arg);
  }

  async index1Action() {
    let uid = `a${+new Date()}`;
    let a = await this.session(uid, {
      lastdate: +new Date()
    });
    return this.success(await this.session());
  }

  index2Action() {
    this.ctx.download(path.join(think.ROOT_PATH, 'src/controller/redis.js'));
  }
}
