/*
* @Author: lushijie
* @Date:   2017-08-24 09:33:17
* @Last Modified by:   lushijie
* @Last Modified time: 2017-08-27 17:51:16
*/
module.exports = class extends think.Controller {
  constructor(...props) {
    super(...props);
  }

  async indexAction() {
    let model1 = this.sequel('user', {type: 'sequel'});
    // let model2 = this.ctx.sequel('user', {type: 'sequel'});
    // let model3 = think.sequel('user', {type: 'sequel'});

    let result1 = (await model1.test()).length;  // controller call model
    // let result2 = (await model2.test()).length;  // ctx
    // let result3 = (await model3.test()).length;  // think
    let result4 = await model1.findAndCount();   // model call self in controller

    return this.success(`sequel->${result1}:${result4.count}`);
  }

  async relationAction() {
    let model = this.sequel('user', {type: 'sequel'});
    console.log(await model.relation());
    return this.success('relation');
  }
}
