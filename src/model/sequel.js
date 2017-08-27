/*
* @Author: lushijie
* @Date:   2017-08-23 18:56:12
* @Last Modified by:   lushijie
* @Last Modified time: 2017-08-27 13:35:05
*/
const Sequelize = require('sequelize');
module.exports = class extends think.Sequel {
  constructor(...props) {
    super(...props);
  }

  get schema() {
    return {
      attributes: {
        id: {
          type: Sequelize.BIGINT,
          primaryKey: true
        },
        name: Sequelize.STRING(255)
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
