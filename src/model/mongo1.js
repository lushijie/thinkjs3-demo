/*
* @Author: lushijie
* @Date:   2018-01-06 14:06:14
* @Last Modified by:   lushijie
* @Last Modified time: 2018-04-16 09:57:07
*/
module.exports = class extends think.Mongo {
  getList() {
    return this.where({'_id': {$eq: think.Mongo.ObjectID('59eff824d455d5b177292751')}}).select();
    // return this.field('name').select();
  }
}
