/*
* @Author: lushijie
* @Date:   2017-08-24 09:33:17
* @Last Modified by:   lushijie
* @Last Modified time: 2017-08-27 13:51:59
*/
module.exports = class extends think.Controller {
  constructor(...props) {
    super(...props);
  }

  async indexAction() {
    let aliasModel1 = this.sequel('user', {type: 'sequel'});
    let aliasModel2 = this.ctx.sequel('user', {type: 'sequel'});
    let aliasModel3 = think.sequel('user', {type: 'sequel'});

    let result1 = (await aliasModel1.test()).length;    // controller call model
    let result2 = (await aliasModel2.test()).length;  // ctx
    let result3 = (await aliasModel3.test()).length;  // think
    let result4 = await aliasModel1.findAndCount();   // controller call self

    return this.success(`sequel->${result1}:${result2}:${result3}:${result4.count}`);
  }
}
