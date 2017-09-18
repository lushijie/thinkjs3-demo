/*
* @Author: lushijie
* @Date:   2017-08-31 14:50:30
* @Last Modified by:   lushijie
* @Last Modified time: 2017-09-18 09:51:17
*/
module.exports = class extends think.Mongoose {
  constructor(...props) {
    super(...props);
  }

  get schema() {
    return {
      id: Number,
      name: String,
    }
  }

  async savePlayer(player) {
    await this.create(player);
    return this.find();
  }
}
