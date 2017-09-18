/*
* @Author: lushijie
* @Date:   2017-08-31 14:56:26
* @Last Modified by:   lushijie
* @Last Modified time: 2017-09-18 09:42:18
*/
module.exports = class extends think.Controller {
  constructor(...props) {
    super(...props);
  }

  async indexAction() {
    let Player = this.mongoose('mongoose/player', {type: 'mongoose'});
    await Player.create({ name: 'lushijie', id: new Date().getTime()});
    const result = await Player.find();
    this.json(result);
  }
}
