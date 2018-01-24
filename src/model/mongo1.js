/*
* @Author: lushijie
* @Date:   2018-01-06 14:06:14
* @Last Modified by:   lushijie
* @Last Modified time: 2018-01-24 10:50:30
*/
module.exports = class extends think.Mongo {
  getList() {
    console.log()
    console.log(this.pk, '000');
    return this.where({'_id': {$eq: think.Mongo.ObjectID('59eff824d455d5b177292751')}}).select();
    // return this.field('name').select();
  }
}
