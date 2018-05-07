/*
* @Author: lushijie
* @Date:   2017-07-21 09:44:55
* @Last Modified by:   lushijie
* @Last Modified time: 2018-05-07 11:51:15
*/

const jsonwebtoken = require('jsonwebtoken');

module.exports = {
  authFail() {
    return this.fail('token 验证失败');
  },

  checkAuth(target, name, descriptor) {
    const action = descriptor.value;
    descriptor.value = function() {
      console.log(this.ctx.state.user);
      const userName = this.ctx.state.user && this.ctx.state.user.name;
      if (!userName) {
        return think.authFail.bind(this)();
      }
      think.updateAuth.bind(this)(userName);
      return action.apply(this, arguments);
    }
    return descriptor;
  },

  updateAuth(userName) {
    const userInfo = {
      name: userName
    };
    const {secret, cookie, expire} = think.config('jwt');
    console.log(secret, cookie, expire);
    const token = jsonwebtoken.sign(userInfo, secret, {expiresIn: expire});
    this.cookie(cookie, token);
    return token;
  }
}
