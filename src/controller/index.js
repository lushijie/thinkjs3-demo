const Base = require('./base.js');
const fs = require('fs');
const path = require('path');
const helper = require('think-helper');

module.exports = class extends Base {

  constructor(...arg) {
    super(...arg);
    this.infoModel = this.model('info');
  }

  async indexAction() {
    this.assign('infoList', await this.infoModel.getAllInfo());
    return this.display();
  }

  async delInfoAction() {
    let body = this.ctx.post();
    await this.infoModel.delInfoById(body.id)
    this.success();
  }

  async addInfoAction() {
    let file = this.ctx.file().file;
    let newFilePath = path.join(think.ROOT_PATH, 'upload' , `${helper.uuid()}_${file.name}`);
    fs.renameSync(file.path, newFilePath);
    let info = {
      filePath: newFilePath,
      order: this.ctx.post().order
    };
    let insertId = await this.infoModel.addInfo(info);
    this.success({id: insertId});
  }
}
