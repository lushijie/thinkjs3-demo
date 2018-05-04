const jsonwebtoken = require('jsonwebtoken');

module.exports = class extends think.Controller {
  updateAuth(userName) {
    const userInfo = {
      name: userName
    };
    const secret = think.config('jwtSecret');
    const token = jsonwebtoken.sign(userInfo, secret, { expiresIn: 60 });
    this.cookie(think.config('jwtCookie'), token);
    return token;
  }

  __before(){
    const userName = this.ctx.state.user && this.ctx.state.user.name;
    if (userName) {
      this.updateAuth(userName);
    }
    return true;
  }
}
