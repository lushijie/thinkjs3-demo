/*
* @Author: lushijie
* @Date:   2018-07-26 18:18:13
* @Last Modified by:   lushijie
* @Last Modified time: 2018-07-26 19:58:09
*/
let checkAuth = think.Controller.prototype.checkAuth;
let updateAuth = think.Controller.prototype.updateAuth;

module.exports = class extends think.Logic {
  __before() {

  }

  @checkAuth
  userAction(){
    this.rules = {
    }
  }
}
