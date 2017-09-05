const BaseRest = require('./rest.js');
module.exports = class extends BaseRest {
  getAction() {
    console.log(this.get('id'))
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
