/*
* @Author: lushijie
* @Date:   2017-08-30 18:48:15
* @Last Modified by:   lushijie
* @Last Modified time: 2017-08-30 18:49:50
*/
module.exports = class extends think.Logic {
  indexAction(){
    let rules = {
      file: {
        required: true,
        image: true,
        method: 'file'
      }
    }

    if(!this.validate(rules)) {
      console.log(this.validateErrors);
      return this.fail(this.validateErrors);
    }
  }
}
