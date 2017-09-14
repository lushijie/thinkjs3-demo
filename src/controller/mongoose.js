/*
* @Author: lushijie
* @Date:   2017-08-31 14:56:26
* @Last Modified by:   lushijie
* @Last Modified time: 2017-09-14 09:33:23
*/
module.exports = class extends think.Controller {
  constructor(...props) {
    super(...props);
  }

  async indexAction() {
    let Player = this.mongoose('mongoose/player', {type: 'mongoose'});
    let p = new Player({ name: 'lushijie', id: new Date().getTime().toString().slice(4) });
    p.save();
    const data = await Player.find();
    this.json(data);
  }
}
