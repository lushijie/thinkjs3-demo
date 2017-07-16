module.exports = class extends think.Model {
  constructor(...args) {
    super(...args);
  }

  async getAllInfo() {
    // this.explain(true);
    console.log('---', await this.getField('id'))
    console.log(await this.buildSql());
    return await this.select();
  }

  async delInfoById(id) {
    return await this.where({id: ['=', id]}).delete();
  }

  async addInfo(info) {
    return await this.add(info)
  }
}
