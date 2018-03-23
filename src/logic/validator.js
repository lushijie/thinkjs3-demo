/*
* @Author: lushijie
* @Date:   2017-08-20 18:52:08
* @Last Modified by:   lushijie
* @Last Modified time: 2018-03-19 18:42:33
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
    // let rules = {
    //   b: {
    //     array: true,
    //     children: {
    //       checkArray: true
    //     }
    //   }
    // }
    // if(!this.validate(rules)) {
    //   return this.fail(this.validateErrors);
    // }

    this.allowMethods = 'put';

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
    console.log(this.ctx.method);
    this.allowMethods = 'put'; //  只允许 POST 请求类型
    this.rules = {
      name: {
        required: true,
        // isThinkjs: true,
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
