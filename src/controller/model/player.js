/*
* @Author: lushijie
* @Date:   2017-09-10 14:47:43
* @Last Modified by:   lushijie
* @Last Modified time: 2018-01-24 11:20:04
*/
module.exports = class extends think.Controller {
  constructor(...arg) {
    super(...arg);
    this.modelInstance = this.model('mysql/player');
    this.modelInstance2 = this.model('mysql/player2');
  }

  async indexAction() {
    this.json(await this.modelInstance.page(1, 2).countSelect());
    // this.json(await this.modelInstance.getAllPlayers());
  }

  async index2Action() {
    this.json(await this.modelInstance2.getAllPlayers());
  }
}
