const Base = require('./base.js');

module.exports = class extends Base {
  constructor(...arg) {
    super(...arg);
  }

  indexAction() {
    return this.display();
  }
}
