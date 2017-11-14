/*
* @Author: lushijie
* @Date:   2017-11-14 16:41:26
* @Last Modified by:   lushijie
* @Last Modified time: 2017-11-14 16:54:15
*/
module.exports = class extends think.Logic {
  getTunnelDeviceAction() {
    let rules = {
      name: {
        required: true,
        aliasName: '姓名'
      }
    }

    let msgs = {
      app_id: '{name} 验证失败(自定义错误)',
      name: '{name} 验证失败'
    }

    if(!this.validate(rules, msgs)) {
      console.log(this.validateErrors);
      return this.fail(this.validateErrors);
    }
  }
}
