/*
* @Author: lushijie
* @Date:   2017-07-21 09:44:55
* @Last Modified by:   lushijie
* @Last Modified time: 2018-05-07 10:54:02
*/

const jsonwebtoken = require('jsonwebtoken');

module.exports = {
  checkAuth(target, name, descriptor) {
    console.log('checkAuth outter...');
    const action = descriptor.value;
    descriptor.value = function() {
      const userName = this.ctx.state.user && this.ctx.state.user.name;

      console.log('userName=', userName);
      if (!userName) {
        return this.fail('token 验证失败');
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
    const secret = think.config('jwtSecret');
    const token = jsonwebtoken.sign(userInfo, secret, { expiresIn: 60 });
    this.cookie(think.config('jwtCookie'), token);
    return token;
  }
}
