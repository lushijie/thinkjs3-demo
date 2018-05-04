/*
* @Author: lushijie
* @Date:   2017-08-20 18:52:08
* @Last Modified by:   lushijie
* @Last Modified time: 2018-04-25 10:30:48
*/
module.exports = class extends think.Logic {
  get scope() {
    return {
      app_id: {
        required: true
      }
    }
  }

  indexAction(){
    let rules = {
      a: {
        required: true,
        array: true,
        children: {
          trim: true,
        },
      }
    };

    let flag = this.validate(rules);
    let msgs = {
    }

    if(!this.validate(rules, msgs)) {
      return this.fail(this.validateErrors);
    }
  }

  index2Action() {
    let rules = {
      name: {
        required: true,
        aliasName: '姓名'
      }
    }
    let flag = this.validate(rules, {})
    if (!flag) {
      return this.fail(this.validateErrors);
    }
  }

  index3Action() {
    let rules = {
      // arr : {
      //   array: true,
      //   children: {
      //     int : {min:1,max:99},
      //   }
      // }
      name: {
        // required: true,
        default: ''
      }
    }

    if(!this.validate(rules)) {
      return this.fail(this.validateErrors);
    }
  }
}
