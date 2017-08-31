/*
* @Author: lushijie
* @Date:   2017-08-31 14:56:26
* @Last Modified by:   lushijie
* @Last Modified time: 2017-08-31 14:58:31
*/
module.exports = class extends think.Controller {
  constructor(...props) {
    super(...props);
  }

  async indexAction() {
    let model = this.mongoose('mongoose/player', {type: 'mongoose'});
    const data = await model.find();
    this.json(data);
  }
}
