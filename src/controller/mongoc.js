/*
* @Author: lushijie
* @Date:   2018-01-06 14:08:37
* @Last Modified by:   lushijie
* @Last Modified time: 2018-01-06 14:26:27
*/
module.exports = class extends think.Controller {
  constructor(...arg) {
    super(...arg);
  }

  async indexAction() {
    let mg = this.mongo('mongo1')

    mg.createIndex({id: 1}, {unique: true});
    console.log(await mg.getIndexes());

    mg.add({
      id: +new Date(),
      name: 'lushijie'
    });

    let res = await mg.getList();
    console.log(res);
  }
}
