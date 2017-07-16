module.exports = class extends think.Model {
  constructor(...args) {
    super(...args);
  }

  async getAllInfo() {
    let infos = await this.select();
    return infos;
  }


}
