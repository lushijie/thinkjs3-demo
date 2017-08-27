/*
* @Author: lushijie
* @Date:   2017-08-23 18:56:12
* @Last Modified by:   lushijie
* @Last Modified time: 2017-08-27 18:02:37
*/
function getDataValues(obj) {
  Object.keys(obj).forEach(e => {
    if(obj[e].dataValues) {
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
      //   address: think.Sequel.HAS_ONE
      // }
    }
  }

  async test() {
    console.log('this.tableName in model: ', this.tableName);
    // await this.sequel('address').findAll();
    return this.findAll();
  }

  async relation() {
    let address = this.sequel('address')
    this.hasOne(address, { foreignKey: 'userId' });
    let result = await this.findAll({
      include: [
        { model: address }
      ]
    });
    return getDataValues(result);
  }
}
