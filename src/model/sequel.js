/*
* @Author: lushijie
* @Date:   2017-08-23 18:56:12
* @Last Modified by:   lushijie
* @Last Modified time: 2017-08-27 13:45:07
*/
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
      options: {
        timestamps: false,
        freezeTableName: true,
        tableName: 'think_user'
      }
    }
  }

  async test() {
    console.log('this.models in model: ', this.models);
    console.log('this.tableName in model: ', this.tableName);
    console.log('this.sequel in model: ',(await this.sequel('sequel').findAll()).length);
    return this.findAll();
  }
}
