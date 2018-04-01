/*
* @Author: lushijie
* @Date:   2018-01-06 14:08:37
* @Last Modified by:   lushijie
* @Last Modified time: 2018-03-26 15:18:40
*/
module.exports = class extends think.Controller {
  constructor(...arg) {
    super(...arg);
  }

  async indexAction() {
    let mg = this.mongo('mongo1');
    // let data = await mg.where({name: 'lushijie'}).order({id: 'DESC'}).select();
    // let data = await mg.where({'name': {$ne: 'gexufei'}}).select();
    let data = await mg.getList();

    this.json(data);
    // mg.createIndex({id: 1}, {unique: true});
    // console.log(await mg.getIndexes());

    // mg.add({
    //   id: +new Date(),
    //   name: 'lushijie'
    // });

    // let res = await mg.getList();
    // console.log(res);
  }
}
