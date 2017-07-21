module.exports = class extends think.Logic {
  indexAction(){

  }

  validatorAction() {
    let rules = {
      name: {
        required: true,
        isThinkjs: true,
        aliasName: '姓名'
      }
    }
    if(!this.validate(rules)) {
      return this.fail(this.validateErrors);
    }
  }

}
