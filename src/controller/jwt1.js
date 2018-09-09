/*
* @Author: lushijie
* @Date:   2018-05-07 11:31:26
* @Last Modified by:   lushijie
* @Last Modified time: 2018-07-26 19:19:31
*/
const userList = {
  lushijie: '123123',
  gexufei: '456456'
};

module.exports = class extends think.Controller {
  async userAction() {
    const userInfo = this.ctx.state.user;
    if (userInfo) {
      return this.success(userInfo);
    } else {
      return this.fail('获取用户信息失败');
    }
  }

  loginAction() {
    const {name, password} = this.get();
    if (userList[name] && password === userList[name]) {
      const token = this.updateAuth(name);
      return this.success(token);
    } else {
      return this.fail('登陆失败');
    }
  }

  logoutAction() {
    this.updateAuth(null);
    return this.success('退出登录成功');
  }
}
