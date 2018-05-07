const Auth = require('./auth.js');

// 全部验证 auth
module.exports = class extends Auth {
  indexAction() {
    return this.success(this.ctx.state.user);
  }

  index2Action() {
    return this.success(this.ctx.state.user);
  }
}

