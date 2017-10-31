/*
* @Author: lushijie
* @Date:   2017-10-25 09:54:15
* @Last Modified by:   lushijie
* @Last Modified time: 2017-10-25 19:09:13
*/

module.exports = class extends think.Mongoose {
  constructor(...props) {
    super(...props);
  }

  get schema() {
    console.log(this.tablePrefix)
    return {
      id: String,   // 工号
      name: String, // 姓名
      dep: {        // 部门
        type: think.Mongoose.ObjectId,
        ref: `${this.tablePrefix}department`
      }
    }
  }

  // async savePlayer(player) {
  //   await this.create(player);
  //   return this.find();
  // }
}
