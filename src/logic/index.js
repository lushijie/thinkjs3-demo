module.exports = class extends think.Logic {
  get scope() {
    return {
      app_id: {
        required: true
      },
    }
  }

  indexAction(){
    this.eTest();
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
