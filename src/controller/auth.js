/*
* @Author: lushijie
* @Date:   2018-05-07 11:37:07
* @Last Modified by:   lushijie
* @Last Modified time: 2018-05-07 16:01:13
*/
module.exports = class extends think.Controller {
  __before(){
    const userName = this.ctx.state.user && this.ctx.state.user.name;
    if (userName) {
      this.updateAuth(userName);
    } else {
      return this.authFail();
    }
    return true;
  }
}
