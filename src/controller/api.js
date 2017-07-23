const Base = require('./base.js');

module.exports = class extends Base {
  indexAction() {
    return this.display();
  }
  index2Action() {
    console.log('name = ', this.get('name'));
    return this.display('api_index');
  }
};
