/*
* @Author: lushijie
* @Date:   2017-08-31 14:50:30
* @Last Modified by:   lushijie
* @Last Modified time: 2017-10-25 19:08:50
*/
module.exports = class extends think.Mongoose {
  constructor(...props) {
    super(...props);
  }

  get schema() {
    return {
      id: String, // 部门编号
      name: String, // 名称
    }
  }

  // async savePlayer(player) {
  //   await this.create(player);
  //   return this.find();
  // }
}
