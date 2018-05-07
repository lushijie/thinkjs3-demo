/*
* @Author: lushijie
* @Date:   2018-05-07 11:31:26
* @Last Modified by:   lushijie
* @Last Modified time: 2018-05-07 11:41:00
*/
const Base = require('./base.js');
const checkAuth = think.checkAuth;
const updateAuth = think.updateAuth;

// 部分验证
module.exports = class extends think.Controller {
  @checkAuth
  async indexAction() {
    return this.success(this.ctx.state.user);
  }

  loginAction() {
    // 验证通过之后生成token, 种coookie
    const token = updateAuth.bind(this)('lushijie');
    return this.success(token);
  }

  logoutAction() {
    const token = updateAuth.bind(this)()
    return this.success('退出登录成功');
  }
}

