const Base = require('./base.js');

module.exports = class extends Base {

  constructor(...arg) {
    super(...arg);
    this.infoModel = this.model('info');
  }

  async indexAction() {
    this.assign('username', 'lushijie');
    this.assign('infoList', await this.infoModel.getAllInfo());
    return this.display();
  }

  async deleteInfoAction() {
    let body = this.ctx.post();
    await this.infoModel.where({id: ['=', body.id]}).delete();
    this.success();
  }

  async addInfoAction() {
    let body = this.ctx.post();
    let fields = {
      img: body.img,
      order: body.order
    };
    let insertId = await this.infoModel.add(fields);
    this.success();
  }
}
