/*
* @Author: lushijie
* @Date:   2018-01-06 14:06:14
* @Last Modified by:   lushijie
* @Last Modified time: 2018-01-06 14:20:00
*/
module.exports = class extends think.Mongo {
  getList() {
    return this.field('name').select();
  }
}
