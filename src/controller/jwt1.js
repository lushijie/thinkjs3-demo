/*
* @Author: lushijie
* @Date:   2018-05-07 11:31:26
* @Last Modified by:   lushijie
* @Last Modified time: 2018-05-07 16:00:30
*/
const Base = require('./base.js');
let checkAuth = think.Controller.prototype.checkAuth;
let updateAuth = think.Controller.prototype.updateAuth;

// 部分验证
module.exports = class extends think.Controller {
  @checkAuth
  async indexAction() {
    return this.success(this.ctx.state.user);
  }

  loginAction() {
    // 验证通过之后生成token, 种coookie
    const token = this.updateAuth('lushijie');
    return this.success(token);
  }

  logoutAction() {
    this.updateAuth();
    return this.success('退出登录成功');
  }
}

