/*
* @Author: lushijie
* @Date:   2017-08-24 09:33:17
* @Last Modified by:   lushijie
* @Last Modified time: 2017-08-25 09:34:53
*/
module.exports = class extends think.Controller {
  constructor(...props) {
    super(...props);
  }

  async indexAction() {
    let aliasModel = this.sequelize('alias', {type: 'sequelize'});
    let rows = (await aliasModel.test()).length;
    // console.log(await aliasModel.findAll());
    return this.success('sequelize->' + rows);
  }
}
