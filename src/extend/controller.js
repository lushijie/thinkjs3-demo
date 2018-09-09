/*
* @Author: lushijie
* @Date:   2017-07-21 09:51:56
* @Last Modified by:   lushijie
* @Last Modified time: 2018-07-26 19:07:43
*/
// const { runHttpQuery } = require('apollo-server-core');
const jsonwebtoken = require('jsonwebtoken');
module.exports = {
  authFail() {
    return this.fail('token 验证失败......');
  },

  checkAuth(target, name, descriptor) {
    const action = descriptor.value;
    descriptor.value = function() {
      console.log('ctx.state.user', this.ctx.state.user);
      const userName = this.ctx.state.user && this.ctx.state.user.name;
      if (!userName) {
        return this.authFail();
      }
      this.updateAuth(userName);
      return action.apply(this, arguments);
    }
    return descriptor;
  },

  updateAuth(userName) {
    const userInfo = {
      name: userName
    };
    const {secret, cookie, expire} = this.config('jwt');
    const token = jsonwebtoken.sign(userInfo, secret, {expiresIn: expire});
    this.cookie(cookie, token);
    return token;
  },

  myExtend() {
    return 'This is extend method for controller...';
  },

  // thinkGraphql(options) {
  //   if (arguments.length !== 1) {
  //     throw new Error("Graphql expects exactly one argument, got " + arguments.length);
  //   }
  //   return runHttpQuery([this.ctx], {
  //     method: this.ctx.method,
  //     options: options,
  //     query: this.ctx.method === 'GET' ? this.ctx.param() : this.ctx.post()
  //   }).then(res => {
  //     return res;
  //   }, err => {
  //     if ('HttpQueryError' !== err.name) {
  //       throw err;
  //     }
  //     return err;
  //   });
  // }
}
