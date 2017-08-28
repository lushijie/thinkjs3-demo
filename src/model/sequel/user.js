/*
* @Author: lushijie
* @Date:   2017-08-23 18:56:12
* @Last Modified by:   lushijie
* @Last Modified time: 2017-08-27 22:12:24
*/
function getDataValues(obj) {
  Object.keys(obj).forEach(e => {
    if(obj[e] && obj[e].dataValues) {
      obj[e] = obj[e].dataValues;
      getDataValues(obj[e]);
    }
  });
  return obj;
}

module.exports = class extends think.Sequel {
  constructor(...props) {
    super(...props);
  }

  get schema() {
    return {
      attributes: {
        id: {
          type: think.Sequel.sequel.BIGINT,
          primaryKey: true
        },
        name: think.Sequel.sequel.STRING(255)
      },
      // relations: {
      //   address: 'belongsTo',
      //   options: {
      //     foreignKey: 'userId',
      //   }
      //   // address: think.Sequel.HAS_ONE
      // }
    }
  }

  async getAll() {
    console.log('this.tableName in model: ', this.tableName);
    // return getDataValues(await this.sequel('address').findAll());
    return getDataValues(await this.findAll());
  }

  async hasOneRelation() {
    let address = this.sequel('address')
    // this.hasOne(address, { foreignKey: 'userId' });
    this.hasOne(address);
    let result = await this.findAll({
      include: [
        { model: address }
      ]
    });
    return getDataValues(result);
  }

  // async belongsToRelation() {
  //   let address = this.sequel('address')
  //   this.belongsTo(address, { foreignKey: 'userId', targetKey: ''});
  //   let result = await this.findAll({
  //     include: [
  //       { model: address }
  //     ]
  //   });
  //   return getDataValues(result);
  // }

}
