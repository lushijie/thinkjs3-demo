const BaseRest = require('./base.js');
module.exports = class extends BaseRest {
  getAction() {
    console.log('id=', this.id);
    return this.success('getAction');
  }

  postAction() {
    return this.success('postAction');
  }

  putAction() {
    return this.success('putAction');
  }

  deleteAction(){
    return this.success('deleteAction');
  }
};
