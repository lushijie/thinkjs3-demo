module.exports = class extends think.Model {
  constructor(...args) {
    super(...args);
  }

  async getAllInfo() {
    // console.log(think.app.validators)
    return await this.select();
  }

  async delInfoById(id) {
    return await this.where({id: ['=', id]}).delete();
  }

  async addInfo(info) {
    return await this.add(info)
  }
}
