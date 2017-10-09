/*
* @Author: lushijie
* @Date:   2017-08-20 18:52:08
* @Last Modified by:   lushijie
* @Last Modified time: 2017-10-09 11:05:13
*/
module.exports = class extends think.Logic {
  // get scope() {
  //   return {
  //     app_id: {
  //       required: true
  //     }
  //   }
  // }

  indexAction(){
    let rules = {
      name: {
        required: true,
        isThinkjs: true,
        aliasName: '姓名'
      }
    }

    let msgs = {
      app_id: '{name} 验证失败(自定义错误)',
      name: '{name} 验证失败'
    }
    if(!this.validate(rules, msgs)) {
      return this.fail(this.validateErrors);
    }
  }

  index2Action() {
    this.rules = {
      name: {
        required: true,
        isThinkjs: true,
        aliasName: '姓名'
      }
    }
  }

  index3Action() {
    let rules = {
      arr : {
        array: true,
        children: {
          int : {min:1,max:99},
        }
      }
    }

    if(!this.validate(rules)) {
      return this.fail(this.validateErrors);
    }
  }
}
