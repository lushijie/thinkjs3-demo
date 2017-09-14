/*
* @Author: lushijie
* @Date:   2017-08-31 14:50:30
* @Last Modified by:   lushijie
* @Last Modified time: 2017-09-13 19:41:12
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
}
