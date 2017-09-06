const BaseRest = require('./base.js');
module.exports = class extends BaseRest {
  getAction() {
    console.log('id=', this.getId());
    console.log('getAction');
  }

  postAction() {
    console.log('postAction');
  }

  putAction() {
    console.log('putAction');
  }

  deleteAction(){
    console.log('deleteAction');
  }
};
